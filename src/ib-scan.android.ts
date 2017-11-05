import * as _ from "lodash";

import * as application from "tns-core-modules/application";

import { Common } from "./ib-scan.common";

export import IBScan = com.integratedbiometrics.ibscanultimate.IBScan;
export import IBScanDevice = com.integratedbiometrics.ibscanultimate.IBScanDevice;
export import IBScanException = com.integratedbiometrics.ibscanultimate.IBScanException;
export import FingerCountState = IBScanDevice.FingerCountState;
export import FingerQualityState = IBScanDevice.FingerQualityState;
export import ImageData = IBScanDevice.ImageData;
export import ImageType = IBScanDevice.ImageType;
export import PlatenState = IBScanDevice.PlatenState;
export import SegmentPosition = IBScanDevice.SegmentPosition;

@Interfaces([
    com.integratedbiometrics.ibscanultimate.IBScanListener,
    com.integratedbiometrics.ibscanultimate.IBScanDeviceListener
])
export class IbScan extends java.lang.Object implements
    com.integratedbiometrics.ibscanultimate.IBScanListener,
    com.integratedbiometrics.ibscanultimate.IBScanDeviceListener {

    private ibScan: IBScan;

    constructor(
        public scanDeviceAttachedCallback?: (deviceId: number) => void,
        public scanDeviceDetachedCallback?: (deviceId: number) => void,
        public scanDevicePermissionGrantedCallback?: (deviceId: number, granted: boolean) => void,
        public scanDeviceCountChangedCallback?: (deviceCount: number) => void,
        public scanDeviceInitProgressCallback?: (deviceIndex: number, progressValue: number) => void,
        public scanDeviceOpenCompleteCallback?: (
            deviceIndex: number,
            device: IBScanDevice,
            exception: IBScanException
        ) => void,
        public deviceCommunicationBrokenCallback?: (device: IBScanDevice) => void,
        public deviceImagePreviewAvailableCallback?: (
            device: IBScanDevice,
            image: ImageData
        ) => void,
        public deviceFingerCountChangedCallback?: (
            device: IBScanDevice,
            fingerState: FingerCountState
        ) => void,
        public deviceFingerQualityChangedCallback?: (
            device: IBScanDevice,
            fingerQualities: FingerQualityState[]
        ) => void,
        public deviceAcquisitionBegunCallback?: (
            device: IBScanDevice,
            imageType: ImageType
        ) => void,
        public deviceAcquisitionCompletedCallback?: (
            device: IBScanDevice,
            imageType: ImageType
        ) => void,
        public deviceImageResultAvailableCallback?: (
            device: IBScanDevice,
            image: ImageData,
            imageType: ImageType,
            splitImageArray: ImageData[]
        ) => void,
        public deviceImageResultExtendedAvailableCallback?: (
            device: IBScanDevice,
            imageStatus: IBScanException,
            image: ImageData,
            imageType: ImageType,
            detectedFingerCount: number,
            segmentImageArray: ImageData[],
            segmentPositionArray: SegmentPosition[]
        ) => void,
        public devicePlatenStateChangedCallback?: (
            device: IBScanDevice,
            platenState: PlatenState
        ) => void,
        public deviceWarningReceivedCallback?: (
            device: IBScanDevice,
            warning: IBScanException
        ) => void,
        public devicePressedKeyButtonsCallback?: (
            device: IBScanDevice,
            pressedKeyButtons: number
        ) => void
    ) {
        super();

        let me = this;

        me.ibScan = IBScan.getInstance(application.android.context);
        me.ibScan.setScanListener(global.__native(me));
        return global.__native(me);
    }

    scanDeviceAttached(deviceId: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceAttachedCallback)) {
            me.scanDeviceAttachedCallback(deviceId);
        }
    }

    scanDeviceDetached(deviceId: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceDetachedCallback)) {
            me.scanDeviceDetachedCallback(deviceId);
        }
    }

    scanDevicePermissionGranted(deviceId: number, granted: boolean) {
        let me = this;

        if (_.isFunction(me.scanDevicePermissionGrantedCallback)) {
            me.scanDevicePermissionGrantedCallback(deviceId, granted);
        }
    }

    scanDeviceCountChanged(deviceCount: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceCountChangedCallback)) {
            me.scanDeviceCountChangedCallback(deviceCount);
        }
    }

    scanDeviceInitProgress(deviceIndex: number, progressValue: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceInitProgressCallback)) {
            me.scanDeviceInitProgressCallback(deviceIndex, progressValue);
        }
    }

    scanDeviceOpenComplete(
        deviceIndex: number,
        device: IBScanDevice,
        exception: IBScanException
    ) {
        let me = this;

        if (_.isFunction(me.scanDeviceOpenCompleteCallback)) {
            me.scanDeviceOpenCompleteCallback(deviceIndex, device, exception);
        }
    }

    deviceCommunicationBroken(device: IBScanDevice) {
        let me = this;

        if (_.isFunction(me.deviceCommunicationBrokenCallback)) {
            me.deviceCommunicationBrokenCallback(device);
        }
    }

    deviceImagePreviewAvailable(
        device: IBScanDevice,
        image: ImageData
    ) {
        let me = this;

        if (_.isFunction(me.deviceImagePreviewAvailableCallback)) {
            me.deviceImagePreviewAvailableCallback(device, image);
        }
    }

    deviceFingerCountChanged(
        device: IBScanDevice,
        fingerState: FingerCountState
    ) {
        let me = this;

        if (_.isFunction(me.deviceFingerCountChangedCallback)) {
            me.deviceFingerCountChangedCallback(device, fingerState);
        }
    }

    deviceFingerQualityChanged(
        device: IBScanDevice,
        fingerQualities: FingerQualityState[]
    ) {
        let me = this;

        if (_.isFunction(me.deviceFingerQualityChangedCallback)) {
            me.deviceFingerQualityChangedCallback(device, fingerQualities);
        }
    }

    deviceAcquisitionBegun(
        device: IBScanDevice,
        imageType: ImageType
    ) {
        let me = this;

        if (_.isFunction(me.deviceAcquisitionBegunCallback)) {
            me.deviceAcquisitionBegunCallback(device, imageType);
        }
    }

    deviceAcquisitionCompleted(
        device: IBScanDevice,
        imageType: ImageType
    ) {
        let me = this;

        if (_.isFunction(me.deviceAcquisitionCompletedCallback)) {
            me.deviceAcquisitionCompletedCallback(device, imageType);
        }
    }

    deviceImageResultAvailable(
        device: IBScanDevice,
        image: ImageData,
        imageType: ImageType,
        splitImageArray: ImageData[]
    ) {
        let me = this;

        if (_.isFunction(me.deviceImageResultAvailableCallback)) {
            me.deviceImageResultAvailableCallback(device, image, imageType, splitImageArray);
        }
    }

    deviceImageResultExtendedAvailable(
        device: IBScanDevice,
        imageStatus: IBScanException,
        image: ImageData,
        imageType: ImageType,
        detectedFingerCount: number,
        segmentImageArray: ImageData[],
        segmentPositionArray: SegmentPosition[]
    ) {
        let me = this;

        if (_.isFunction(me.deviceImageResultExtendedAvailableCallback)) {
            me.deviceImageResultExtendedAvailableCallback(
                device,
                imageStatus,
                image,
                imageType,
                detectedFingerCount,
                segmentImageArray,
                segmentPositionArray
            );
        }
    }

    devicePlatenStateChanged(
        device: IBScanDevice,
        platenState: PlatenState
    ) {
        let me = this;

        if (_.isFunction(me.devicePlatenStateChangedCallback)) {
            me.devicePlatenStateChangedCallback(device, platenState);
        }
    }

    deviceWarningReceived(
        device: IBScanDevice,
        warning: IBScanException
    ) {
        let me = this;

        if (_.isFunction(me.deviceWarningReceivedCallback)) {
            me.deviceWarningReceivedCallback(device, warning);
        }
    }

    devicePressedKeyButtons(
        device: IBScanDevice,
        pressedKeyButtons: number
    ) {
        let me = this;

        if (_.isFunction(me.devicePressedKeyButtonsCallback)) {
            me.devicePressedKeyButtonsCallback(device, pressedKeyButtons);
        }
    }
}