import { isIOS, isAndroid } from "tns-core-modules/platform";
import { Observable } from "tns-core-modules/data/observable";
import * as imageSource from "tns-core-modules/image-source";

import {
  IbScan,
  IBScan,
  IBScanDevice,
  IBScanException,
  ImageType,
  ImageData,
  FingerCountState,
  FingerQualityState,
  SegmentPosition,
  PlatenState
} from "nativescript-ib-scan";

export class HelloWorldModel extends Observable {

  public status: string;
  public imageSource: imageSource.ImageSource

  private ibScan: IbScan;

  constructor() {
    super();

    if (isAndroid) {

      this.ibScan = new IbScan(

        (deviceId: number) => {
          this.set("status", `Device ${deviceId} attached.`);
        },

        (deviceId: number) => {
          this.set("status", `Device ${deviceId} detached`);
        },

        (deviceId: number, granted: boolean) => {
          this.set("status", `Device ${deviceId} permission: ${granted}.`);
        },

        (deviceCount: number) => {
          this.set("status", `Device count updated: ${deviceCount}.`);
        },

        (deviceIndex: number, progressValue: number) => {
          this.set("status", `Device init progress: ${progressValue}.`);
        },

        (
          deviceIndex: number,
          device: IBScanDevice,
          exception: IBScanException
        ) => {
          this.set("status", `Device is ready to use.`);
        },

        (device: IBScanDevice) => {
          this.set("status", `Device communication broken.`);
        },

        (
          device: IBScanDevice,
          image: ImageData
        ) => {
          this.set("status", `Device image preview available.`);
        },

        (
          device: IBScanDevice,
          fingerState: FingerCountState
        ) => {
          this.set("status", `Device finger count changed.`);
        },

        (
          device: IBScanDevice,
          fingerQualities: Array<FingerQualityState>
        ) => {
          this.set("status", `Device finger quality changed.`);
        },

        (
          device: IBScanDevice,
          imageType: ImageType
        ) => {
          this.set("status", `Device acquisition begun.`);
        },

        (
          device: IBScanDevice,
          imageType: ImageType
        ) => {
          this.set("status", `Device acquisition completed.`);
        },

        (
          device: IBScanDevice,
          image: ImageData,
          imageType: ImageType,
          splitImageArray: Array<ImageData>
        ) => {
          this.set("status", `Device image result available.`);
        },

        (
          device: IBScanDevice,
          imageStatus: IBScanException,
          image: ImageData,
          imageType: ImageType,
          detectedFingerCount: number,
          segmentImageArray: Array<ImageData>,
          segmentPositionArray: Array<SegmentPosition>
        ) => {
          this.set("status", `Device image result extended available.`);
          this.ibScan
            .createImageSource(image)
            .then((imageSource) => {
              this.set("imageSource", imageSource);
            })
            .catch((error) => {
              this.set("status", this.getError(error));
            });
        },

        (
          device: IBScanDevice,
          platenState: PlatenState
        ) => {
          this.set("status", `Device platen state changed.`);
        },

        (
          device: IBScanDevice,
          warning: IBScanException
        ) => {
          this.set("status", `Device warning received.`);
        },

        (
          device: IBScanDevice,
          pressedKeyButtons: number
        ) => {
          this.set("status", `Device keybutton pressed.`);
        }
      );

      this.ibScan.getDeviceCount()
        .then((deviceCount) => {
          this.set("status", `Number of connected devices: ${deviceCount}`);
        })
        .catch((error) => {
          this.set("status", this.getError(error));
        });

    } else {
      this.set("status", `Not supported`);
    }
  }

  getError(error): string {
    if (error instanceof Error) {
      return error.message;
    } else if (error instanceof IBScanException) {
      return (<IBScanException>error).getType().toString();
    } else if (error instanceof java.lang.Exception) {
      return (<java.lang.Exception>error).getMessage();
    }
    return error;
  }

  getDeviceList() {
    this.set("status", JSON.stringify(this.ibScan.getDeviceList(), null, 4));
  }

  requestPermission() {
    let connectedDevice = this.ibScan.getDeviceList()[0];
    if (connectedDevice) {
      this.ibScan.requestPermission(connectedDevice.deviceId);
    }
  }

  getDeviceDescription() {
    this.ibScan.getDeviceDescription(0)
      .then((deviceDesc: IBScan.DeviceDesc) => {
        this.set("status", `DeviceId: ${deviceDesc.deviceId}
          \n DevRevision: ${deviceDesc.devRevision}
          \n FwVersion: ${deviceDesc.fwVersion}
          \n InterfaceType: ${deviceDesc.interfaceType}
          \n IsOpened: ${deviceDesc.isOpened}
          \n ProductName: ${deviceDesc.productName}
          \n SerialNumber: ${deviceDesc.serialNumber}`);
      })
      .catch((error) => {
        this.set("status", this.getError(error));
      });
  }

  openDevice() {
    this.ibScan
      .openDeviceAsync(0)
      .catch((error) => {
        this.set("status", this.getError(error));
      });
  }

  setLEDs() {
    this.ibScan
      .setLEDs(IBScanDevice.LED_SCAN_GREEN)
      .then(() => {
        this.set("status", `Check LEDs`);
      })
      .catch((error) => {
        this.set("status", this.getError(error));
      });
  }

  beginCapture() {
    this.ibScan
      .isCaptureAvailable()
      .then((isAvailable) => {
        if (isAvailable) {
          this.ibScan
            .beginCapture()
            .then(() => {
              this.set("status", `Capturing...`);
            })
            .catch((error) => {
              this.set("status", this.getError(error));
            });
        } else {
          this.set("status", `Capture not available.`);
        }
      });
  }

  stopCapture() {
    this.ibScan
      .isCaptureActive()
      .then((isActive) => {
        if (isActive) {
          this.ibScan
            .cancelCapture()
            .then(() => {
              this.set("status", `Capturing cancelled.`);
            })
            .catch((error) => {
              this.set("status", this.getError(error));
            });
        } else {
          this.set("status", `No active capture.`);
        }
      });
  }

  closeDevice() {
    this.ibScan
      .closeDevice()
      .then(() => {
        this.set("status", `Device closed.`);
      })
      .catch((error) => {
        this.set("status", this.getError(error));
      });
  }
}