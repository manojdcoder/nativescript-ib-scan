import * as _ from "lodash";

import * as application from "tns-core-modules/application";
import * as imageSource from "tns-core-modules/image-source";

import { Common } from "./ib-scan.common";

import Integer = java.lang.Integer;
import Runnable = java.lang.Runnable;
import ByteBuffer = java.nio.ByteBuffer;
import Context = android.content.Context;
import UsbDevice = android.hardware.usb.UsbDevice;
import Bitmap = android.graphics.Bitmap;

export import IBScan = com.integratedbiometrics.ibscanultimate.IBScan;
export import IBScanDevice = com.integratedbiometrics.ibscanultimate.IBScanDevice;
export import IBScanException = com.integratedbiometrics.ibscanultimate.IBScanException;
export import FingerCountState = IBScanDevice.FingerCountState;
export import FingerQualityState = IBScanDevice.FingerQualityState;
export import ImageData = IBScanDevice.ImageData;
export import ImageType = IBScanDevice.ImageType;
export import ImageFormat = IBScanDevice.ImageFormat;
export import ImageResolution = IBScanDevice.ImageResolution;
export import PlatenState = IBScanDevice.PlatenState;
export import SegmentPosition = IBScanDevice.SegmentPosition;

export interface ConnectedDevice {
    deviceId: number;
    hasPermission: boolean;
}

@Interfaces([
    com.integratedbiometrics.ibscanultimate.IBScanListener,
    com.integratedbiometrics.ibscanultimate.IBScanDeviceListener
])
export class IbScan extends java.lang.Object implements
    com.integratedbiometrics.ibscanultimate.IBScanListener,
    com.integratedbiometrics.ibscanultimate.IBScanDeviceListener {

    private ibScan: IBScan;
    private ibScanDevice: IBScanDevice;
    private bitmapImage: Bitmap;

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
            fingerQualities: Array<FingerQualityState>
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
            splitImageArray: Array<ImageData>
        ) => void,
        public deviceImageResultExtendedAvailableCallback?: (
            device: IBScanDevice,
            imageStatus: IBScanException,
            image: ImageData,
            imageType: ImageType,
            detectedFingerCount: number,
            segmentImageArray: Array<ImageData>,
            segmentPositionArray: Array<SegmentPosition>
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
        return global.__native(this);
    }

    getInstance(): IBScan {
        let me = this;

        if (me.ibScan) {
            return me.ibScan;
        }

        me.ibScan = IBScan.getInstance(application.android.context);
        me.ibScan.setScanListener(me);
        return me.ibScan;
    }

    getDeviceList(): Array<ConnectedDevice> {
        let me = this,
            deviceList: Array<ConnectedDevice> = new Array(),
            usbManager = (<Context>application.android.context).getSystemService(Context.USB_SERVICE),
            usbDeviceList = usbManager.getDeviceList(),
            deviceIterator = usbDeviceList.values().iterator();

        while (deviceIterator.hasNext()) {
            let usbDevice = deviceIterator.next();
            if (IBScan.isScanDevice(usbDevice)) {
                let deviceId = usbDevice.getDeviceId();
                deviceList.push({
                    deviceId: deviceId,
                    hasPermission: me.hasPermission(deviceId)
                });
            }
        }

        return deviceList;
    }

    getDeviceCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.getInstance().getDeviceCount());
            } catch (exception) {
                reject(exception);
            }
        });
    }

    hasPermission(deviceId: number): boolean {
        return this.getInstance().hasPermission(deviceId);
    }

    requestPermission(deviceId: number) {
        this.getInstance().requestPermission(deviceId);
    }

    getDeviceDescription(deviceIndex: number): Promise<IBScan.DeviceDesc> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.getInstance().getDeviceDescription(deviceIndex));
            } catch (exception) {
                reject(exception);
            }
        });
    }

    openDevice(deviceIndex: number): Promise<IBScanDevice> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.getInstance().openDevice(deviceIndex));
            } catch (exception) {
                reject(exception);
            }
        });
    }

    openDeviceAsync(deviceIndex: number): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.getInstance().openDeviceAsync(deviceIndex);
                resolve();
            } catch (exception) {
                reject(exception);
            }
        });
    }

    closeDevice(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.ibScanDevice.close();
                this.ibScanDevice = null;
                resolve();
            } catch (exception) {
                reject(exception);
            }
        });
    }

    getLEDs(): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.ibScanDevice.getLEDs());
            } catch (exception) {
                reject(exception);
            }
        });
    }

    setLEDs(value: number): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.ibScanDevice.setLEDs(value);
                resolve();
            } catch (exception) {
                reject(exception);
            }
        });
    }

    isCaptureActive(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.ibScanDevice.isCaptureActive());
            } catch (exception) {
                reject(exception);
            }
        });
    }

    isCaptureAvailable(
        imageType: ImageType = ImageType.FLAT_SINGLE_FINGER,
        imageResolution: ImageResolution = ImageResolution.RESOLUTION_500
    ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.ibScanDevice.isCaptureAvailable(imageType, imageResolution));
            } catch (exception) {
                reject(exception);
            }
        });
    }

    beginCapture(
        imageType: ImageType = ImageType.FLAT_SINGLE_FINGER,
        imageResolution: ImageResolution = ImageResolution.RESOLUTION_500,
        captureOptions: number = IBScanDevice.OPTION_AUTO_CAPTURE | IBScanDevice.OPTION_AUTO_CONTRAST
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.bitmapImage = this.toDrawBitmap(
                    Integer.parseInt(this.ibScanDevice.getProperty(IBScanDevice.PropertyId.IMAGE_WIDTH)),
                    Integer.parseInt(this.ibScanDevice.getProperty(IBScanDevice.PropertyId.IMAGE_HEIGHT))
                );

                this.ibScanDevice
                    .beginCaptureImage(imageType, imageResolution, captureOptions);

                this.ibScanDevice
                    .setScanDeviceListener(this);

                resolve();
            } catch (exception) {
                reject(exception);
            }
        });
    }

    cancelCapture(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.ibScanDevice
                    .cancelCaptureImage();
                resolve();
            } catch (exception) {
                reject(exception);
            }
        });
    }

    isFingerTouching(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.ibScanDevice.isFingerTouching());
            } catch (exception) {
                reject(exception);
            }
        });
    }

    createImageSource(imageData: ImageData): Promise<imageSource.ImageSource> {
        return new Promise((resolve, reject) => {
            try {
                this.ibScanDevice.createBmpEx(imageData.buffer, this.bitmapImage)
                resolve(imageSource.fromNativeSource(this.bitmapImage));
            } catch (exception) {
                reject(exception);
            }
        });
    }

    private toDrawBitmap(width: number, height: number): Bitmap {
        let bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
        if (bitmap != null) {
            let imageBuffer = (<any>Array).create("byte", width * height * 4);
            for (let y: number = 0; y < height; y++) {
                for (let x: number = 0; x < width; x++) {
                    imageBuffer[(y * width + x) * 4] =
                        imageBuffer[(y * width + x) * 4 + 1] =
                        imageBuffer[(y * width + x) * 4 + 2] = 128;
                    imageBuffer[(y * width + x) * 4 + 3] = 255;
                }
            }
            bitmap.copyPixelsFromBuffer(ByteBuffer.wrap(imageBuffer));
        }
        return bitmap;
    }

    scanDeviceAttached(deviceId: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceAttachedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.scanDeviceAttachedCallback(deviceId);
                    }
                }))
        }
    }

    scanDeviceDetached(deviceId: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceDetachedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.scanDeviceDetachedCallback(deviceId)
                    }
                }));
        }
    }

    scanDevicePermissionGranted(deviceId: number, granted: boolean) {
        let me = this;

        if (_.isFunction(me.scanDevicePermissionGrantedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.scanDevicePermissionGrantedCallback(deviceId, granted);
                    }
                }));
        }
    }

    scanDeviceCountChanged(deviceCount: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceCountChangedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.scanDeviceCountChangedCallback(deviceCount);
                    }
                }));
        }
    }

    scanDeviceInitProgress(deviceIndex: number, progressValue: number) {
        let me = this;

        if (_.isFunction(me.scanDeviceInitProgressCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.scanDeviceInitProgressCallback(deviceIndex, progressValue);
                    }
                }));
        }
    }

    scanDeviceOpenComplete(
        deviceIndex: number,
        device: IBScanDevice,
        exception: IBScanException
    ) {
        let me = this;

        me.ibScanDevice = device;
        if (_.isFunction(me.scanDeviceOpenCompleteCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.scanDeviceOpenCompleteCallback(deviceIndex, device, exception);
                    }
                }));
        }
    }

    deviceCommunicationBroken(device: IBScanDevice) {
        let me = this;

        if (_.isFunction(me.deviceCommunicationBrokenCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceCommunicationBrokenCallback(device);
                    }
                }));
        }
    }

    deviceImagePreviewAvailable(
        device: IBScanDevice,
        image: ImageData
    ) {
        let me = this;

        if (_.isFunction(me.deviceImagePreviewAvailableCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceImagePreviewAvailableCallback(device, image);
                    }
                }));
        }
    }

    deviceFingerCountChanged(
        device: IBScanDevice,
        fingerState: FingerCountState
    ) {
        let me = this;

        if (_.isFunction(me.deviceFingerCountChangedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceFingerCountChangedCallback(device, fingerState);
                    }
                }));
        }
    }

    deviceFingerQualityChanged(
        device: IBScanDevice,
        fingerQualities: Array<FingerQualityState>
    ) {
        let me = this;

        if (_.isFunction(me.deviceFingerQualityChangedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceFingerQualityChangedCallback(device, fingerQualities);
                    }
                }));
        }
    }

    deviceAcquisitionBegun(
        device: IBScanDevice,
        imageType: ImageType
    ) {
        let me = this;

        if (_.isFunction(me.deviceAcquisitionBegunCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceAcquisitionBegunCallback(device, imageType);
                    }
                }));
        }
    }

    deviceAcquisitionCompleted(
        device: IBScanDevice,
        imageType: ImageType
    ) {
        let me = this;

        if (_.isFunction(me.deviceAcquisitionCompletedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceAcquisitionCompletedCallback(device, imageType);
                    }
                }));
        }
    }

    deviceImageResultAvailable(
        device: IBScanDevice,
        image: ImageData,
        imageType: ImageType,
        splitImageArray: Array<ImageData>
    ) {
        let me = this;

        if (_.isFunction(me.deviceImageResultAvailableCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceImageResultAvailableCallback(device, image, imageType, splitImageArray);
                    }
                }));
        }
    }

    deviceImageResultExtendedAvailable(
        device: IBScanDevice,
        imageStatus: IBScanException,
        image: ImageData,
        imageType: ImageType,
        detectedFingerCount: number,
        segmentImageArray: Array<ImageData>,
        segmentPositionArray: Array<SegmentPosition>
    ) {
        let me = this;

        if (_.isFunction(me.deviceImageResultExtendedAvailableCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
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
                }));
        }
    }

    devicePlatenStateChanged(
        device: IBScanDevice,
        platenState: PlatenState
    ) {
        let me = this;

        if (_.isFunction(me.devicePlatenStateChangedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.devicePlatenStateChangedCallback(device, platenState);
                    }
                }));
        }
    }

    deviceWarningReceived(
        device: IBScanDevice,
        warning: IBScanException
    ) {
        let me = this;

        if (_.isFunction(me.deviceWarningReceivedCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.deviceWarningReceivedCallback(device, warning);
                    }
                }));
        }
    }

    devicePressedKeyButtons(
        device: IBScanDevice,
        pressedKeyButtons: number
    ) {
        let me = this;

        if (_.isFunction(me.devicePressedKeyButtonsCallback)) {
            application.android.foregroundActivity
                .runOnUiThread(new Runnable({
                    run() {
                        me.devicePressedKeyButtonsCallback(device, pressedKeyButtons);
                    }
                }));
        }
    }
}