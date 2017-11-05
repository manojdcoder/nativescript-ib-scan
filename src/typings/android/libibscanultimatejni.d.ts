/* tslint:disable */

import androidhardwareusbUsbDevice = android.hardware.usb.UsbDevice;
import androidcontentContext = android.content.Context;

declare module com {
	export module integratedbiometrics {
		export module ibscanultimate {
			export class IBScan {
				public openDeviceAsync(param0: number): void;
				public hasPermission(param0: number): boolean;
				public static isScanDevice(param0: androidhardwareusbUsbDevice): boolean;
				public unloadLibrary(): void;
				public openDevice(param0: number, param1: string): com.integratedbiometrics.ibscanultimate.IBScanDevice;
				public openDeviceAsync(param0: number, param1: string): void;
				public setScanListener(param0: com.integratedbiometrics.ibscanultimate.IBScanListener): void;
				public getSdkVersion(): com.integratedbiometrics.ibscanultimate.IBScan.SdkVersion;
				public getInitProgress(param0: number): number;
				public requestPermission(param0: number): void;
				public openDevice(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice;
				public static getInstance(param0: androidcontentContext): com.integratedbiometrics.ibscanultimate.IBScan;
				public getDeviceDescription(param0: number): com.integratedbiometrics.ibscanultimate.IBScan.DeviceDesc;
				public getDeviceCount(): number;
				public updateUsbPermission(): void;
				public enableTraceLog(param0: boolean): void;
				public setContext(param0: androidcontentContext): void;
			}
			export module IBScan {
				export class DeviceDesc {
					public serialNumber: string;
					public productName: string;
					public interfaceType: string;
					public fwVersion: string;
					public devRevision: string;
					public isOpened: boolean;
					public deviceId: number;
					public toString(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: boolean, param6: number);
				}
				export class NativeError {
					public code: number;
					public constructor();
				}
				export class SdkVersion {
					public product: string;
					public file: string;
					public constructor(param0: string, param1: string);
					public toString(): string;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
import androidgraphicsBitmap = android.graphics.Bitmap;
import javaioFile = java.io.File;

declare module com {
	export module integratedbiometrics {
		export module ibscanultimate {
			export class IBScanDevice {
				public static MIN_CONTRAST_VALUE: number;
				public static MAX_CONTRAST_VALUE: number;
				public static OPTION_AUTO_CONTRAST: number;
				public static OPTION_AUTO_CAPTURE: number;
				public static OPTION_IGNORE_FINGER_COUNT: number;
				public static LED_NONE: number;
				public static LED_INIT_BLUE: number;
				public static LED_SCAN_GREEN: number;
				public static LED_SCAN_CURVE_RED: number;
				public static LED_SCAN_CURVE_GREEN: number;
				public static LED_SCAN_CURVE_BLUE: number;
				public static IBSU_LED_F_BLINK_GREEN: number;
				public static IBSU_LED_F_BLINK_RED: number;
				public static IBSU_LED_F_LEFT_LITTLE_GREEN: number;
				public static IBSU_LED_F_LEFT_LITTLE_RED: number;
				public static IBSU_LED_F_LEFT_RING_GREEN: number;
				public static IBSU_LED_F_LEFT_RING_RED: number;
				public static IBSU_LED_F_LEFT_MIDDLE_GREEN: number;
				public static IBSU_LED_F_LEFT_MIDDLE_RED: number;
				public static IBSU_LED_F_LEFT_INDEX_GREEN: number;
				public static IBSU_LED_F_LEFT_INDEX_RED: number;
				public static IBSU_LED_F_LEFT_THUMB_GREEN: number;
				public static IBSU_LED_F_LEFT_THUMB_RED: number;
				public static IBSU_LED_F_RIGHT_THUMB_GREEN: number;
				public static IBSU_LED_F_RIGHT_THUMB_RED: number;
				public static IBSU_LED_F_RIGHT_INDEX_GREEN: number;
				public static IBSU_LED_F_RIGHT_INDEX_RED: number;
				public static IBSU_LED_F_RIGHT_MIDDLE_GREEN: number;
				public static IBSU_LED_F_RIGHT_MIDDLE_RED: number;
				public static IBSU_LED_F_RIGHT_RING_GREEN: number;
				public static IBSU_LED_F_RIGHT_RING_RED: number;
				public static IBSU_LED_F_RIGHT_LITTLE_GREEN: number;
				public static IBSU_LED_F_RIGHT_LITTLE_RED: number;
				public static IBSU_LED_F_PROGRESS_ROLL: number;
				public static IBSU_LED_F_PROGRESS_LEFT_HAND: number;
				public static IBSU_LED_F_PROGRESS_TWO_THUMB: number;
				public static IBSU_LED_F_PROGRESS_RIGHT_HAND: number;
				public setBeeper(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.BeepPattern, param1: number, param2: number, param3: number, param4: number): void;
				public captureImageManually(): void;
				public getProperty(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId): string;
				public createBmpEx(param0: native.Array<number>, param1: androidgraphicsBitmap): void;
				public setScanDeviceListener(param0: com.integratedbiometrics.ibscanultimate.IBScanDeviceListener): void;
				public getResultImageExt(param0: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition): native.Array<javalangObject>;
				public isCaptureActive(): boolean;
				public getPlatenStateAtCapture(): com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState;
				public getCombineImageEx(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.CombineImageWhichHand): native.Array<javalangObject>;
				public getOperableLEDs(): com.integratedbiometrics.ibscanultimate.IBScanDevice.LedState;
				public cancelCaptureImage(): void;
				public getOperableBeeper(): com.integratedbiometrics.ibscanultimate.IBScanDevice.BeeperType;
				public getCombineImage(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.CombineImageWhichHand): javalangObject;
				public setProperty(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId, param1: string): void;
				public beginCaptureImage(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageResolution, param2: number): void;
				public setContrast(param0: number): void;
				public captureImage(): native.Array<javalangObject>;
				public isFingerTouching(): boolean;
				public wsqEncodeToFile(param0: string, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: string): number;
				public setLEOperationMode(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode): void;
				public close(): void;
				public getLEOperationMode(): com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode;
				public getLEDs(): number;
				public getEnhancedImageReserved(param0: string, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData): native.Array<javalangObject>;
				public getRollingInfo(): com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingData;
				public getContrast(): number;
				public isOpened(): boolean;
				public enableEvent(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType, param1: boolean): void;
				public setLEDs(param0: number): void;
				public calculateNfiqScore(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData): number;
				public constructor(param0: number);
				public captureImageExtended(): native.Array<javalangObject>;
				public isCaptureAvailable(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageResolution): boolean;
				public setPropertyReserved(param0: string, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId, param2: string): void;
				public generateZoomOutImageEx(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: number, param6: number): number;
			}
			export module IBScanDevice {
				export class BeepPattern {
					public static BEEP_PATTERN_GENERIC: com.integratedbiometrics.ibscanultimate.IBScanDevice.BeepPattern;
					public static BEEP_PATTERN_REPEAT: com.integratedbiometrics.ibscanultimate.IBScanDevice.BeepPattern;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.BeepPattern;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.BeepPattern;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.BeepPattern>;
					public toCode(): number;
				}
				export class BeeperType {
					public static BEEPER_TYPE_NONE: com.integratedbiometrics.ibscanultimate.IBScanDevice.BeeperType;
					public static BEEPER_TYPE_MONOTONE: com.integratedbiometrics.ibscanultimate.IBScanDevice.BeeperType;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.BeeperType;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.BeeperType;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.BeeperType>;
					public toCode(): number;
				}
				export class CombineImageWhichHand {
					public static COMBINE_IMAGE_LEFT_HAND: com.integratedbiometrics.ibscanultimate.IBScanDevice.CombineImageWhichHand;
					public static COMBINE_IMAGE_RIGHT_HAND: com.integratedbiometrics.ibscanultimate.IBScanDevice.CombineImageWhichHand;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.CombineImageWhichHand;
					public toCode(): number;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.CombineImageWhichHand>;
				}
				export class EventType {
					public static COMMUNICATION_BROKEN: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static PREVIEW_IMAGE_AVAILABLE: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static ACQUISITION_BEGUN: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static ACQUISITION_COMPLETED: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static RESULT_IMAGE_AVAILABLE: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static FINGER_QUALITY_CHANGED: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static FINGER_COUNT_CHANGED: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static PLATEN_STATE_CHANGED: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static WARNING_RECEIVED: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static RESULT_IMAGE_EXTENDED_AVAILABLE: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static KEYBUTTON: com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.EventType>;
					public toCode(): number;
				}
				export class FingerCountState {
					public static FINGER_COUNT_OK: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState;
					public static TOO_MANY_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState;
					public static TOO_FEW_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState;
					public static NON_FINGER: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState>;
					public toCode(): number;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState;
				}
				export class FingerQualityState {
					public static FINGER_NOT_PRESENT: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static GOOD: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static FAIR: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static POOR: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static INVALID_AREA_TOP: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static INVALID_AREA_LEFT: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static INVALID_AREA_RIGHT: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static INVALID_AREA_BOTTOM: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState;
					public toCode(): number;
				}
				export class ImageData {
					public buffer: native.Array<number>;
					public width: number;
					public height: number;
					public resolutionX: number;
					public resolutionY: number;
					public frameTime: number;
					public pitch: number;
					public bitsPerPixel: number;
					public format: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat;
					public isFinal: boolean;
					public processThres: number;
					public toBitmapScaled(param0: number, param1: number, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState, param3: number, param4: number, param5: boolean, param6: boolean, param7: boolean): androidgraphicsBitmap;
					public toBitmapScaled(param0: number, param1: number): androidgraphicsBitmap;
					public toBitmapScaled(param0: number, param1: number, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState, param3: number): androidgraphicsBitmap;
					public toBitmap(): androidgraphicsBitmap;
					public saveToFile(param0: javaioFile, param1: string): boolean;
					public drawQualityArrow(param0: androidgraphicsBitmap, param1: number, param2: number, param3: boolean, param4: boolean, param5: boolean): void;
					public toBitmapScaled(param0: number, param1: number, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState, param3: number, param4: boolean, param5: boolean, param6: boolean): androidgraphicsBitmap;
					public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean, param10: number);
					public toBitmapScaled(param0: number, param1: number, param2: boolean, param3: boolean, param4: boolean): androidgraphicsBitmap;
				}
				export class ImageFormat {
					public static GRAY: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat;
					public static RGB24: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat;
					public static RGB32: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat;
					public static UNKNOWN: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat>;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageFormat;
					public toCode(): number;
				}
				export class ImageResolution {
					public static RESOLUTION_500: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageResolution;
					public static RESOLUTION_1000: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageResolution;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageResolution>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageResolution;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageResolution;
					public toCode(): number;
				}
				export class ImageType {
					public static TYPE_NONE: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public static ROLL_SINGLE_FINGER: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public static FLAT_SINGLE_FINGER: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public static FLAT_TWO_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public static FLAT_FOUR_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public static FLAT_THREE_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType;
					public toCode(): number;
					public toDescription(): string;
				}
				export class LEOperationMode {
					public static AUTO: com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode;
					public static ON: com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode;
					public static OFF: com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode;
					public toCode(): number;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.LEOperationMode>;
				}
				export class LedState {
					public ledType: com.integratedbiometrics.ibscanultimate.IBScanDevice.LedType;
					public ledCount: number;
					public operableLEDs: number;
					public toString(): string;
					public constructor(param0: number, param1: number, param2: number);
				}
				export class LedType {
					public static NONE: com.integratedbiometrics.ibscanultimate.IBScanDevice.LedType;
					public static TSCAN: com.integratedbiometrics.ibscanultimate.IBScanDevice.LedType;
					public static FSCAN: com.integratedbiometrics.ibscanultimate.IBScanDevice.LedType;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.LedType;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.LedType>;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.LedType;
					public toCode(): number;
				}
				export class NativeError {
					public code: number;
					public constructor();
				}
				export class PlatenState {
					public static CLEARD: com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState;
					public static HAS_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState;
					public toCode(): number;
				}
				export class PropertyId {
					public static PRODUCT_ID: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static SERIAL_NUMBER: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static VENDOR_ID: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static IBIA_VENDOR_ID: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static IBIA_VERSION: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static IBIA_DEVICE_ID: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static FIRMWARE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static REVISION: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static PRODUCTION_DATE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static SERVICE_DATE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static IMAGE_WIDTH: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static IMAGE_HEIGHT: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static IGNORE_FINGER_TIME: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RECOMMENDED_LEVEL: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static POLLINGTIME_TO_BGETIMAGE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ENABLE_POWER_SAVE_MODE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RETRY_WRONG_COMMUNICATION: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static CAPTURE_TIMEOUT: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ROLL_MIN_WIDTH: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ROLL_MODE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ROLL_LEVEL: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static CAPTURE_AREA_THRESHOLD: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ENABLE_DECIMATION: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ENABLE_CAPTURE_ON_RELEASE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static DEVICE_INDEX: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static DEVICE_ID: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static SUPER_DRY_MODE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static MIN_CAPTURE_TIME_IN_SUPER_DRY_MODE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ROLLED_IMAGE_WIDTH: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ROLLED_IMAGE_HEIGHT: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static NO_PREVIEW_IMAGE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ROLL_IMAGE_OVERRIDE: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static WARNING_MESSAGE_INVALID_AREA: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ENABLE_WET_FINGER_DETECT: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static WET_FINGER_DETECT_LEVEL: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static WET_FINGER_DETECT_LEVEL_THRESHOLD: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static START_POSITION_OF_ROLLING_AREA: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static START_ROLL_WITHOUT_LOCK: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static ENABLE_TOF: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RESERVED_1: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RESERVED_2: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RESERVED_100: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RESERVED_IMAGE_PROCESS_THRESHOLD: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RESERVED_ENABLE_TOF_FOR_ROLL: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RESERVED_CAPTURE_BRIGHTNESS_THRESHOLD_FOR_FLAT: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static RESERVED_CAPTURE_BRIGHTNESS_THRESHOLD_FOR_ROLL: com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId>;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.PropertyId;
					public toCode(): number;
				}
				export class RollingData {
					public rollingState: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState;
					public rollingLineX: number;
					public constructor(param0: number, param1: number);
				}
				export class RollingState {
					public static NOT_PRESENT: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState;
					public static TAKE_ACQUISITION: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState;
					public static COMPLETE_ACQUISITION: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState;
					public static RESULT_IMAGE: com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState;
					public toCode(): number;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanDevice.RollingState;
				}
				export class SegmentPosition {
					public x1: number;
					public y1: number;
					public x2: number;
					public y2: number;
					public x3: number;
					public y3: number;
					public x4: number;
					public y4: number;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
				}
				export class WsqImage {
					public buffer: native.Array<number>;
					public len: number;
					public constructor(param0: native.Array<number>, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module integratedbiometrics {
		export module ibscanultimate {
			export class IBScanDeviceListener {
				/**
				 * Constructs a new instance of the com.integratedbiometrics.ibscanultimate.IBScanDeviceListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					deviceCommunicationBroken(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice): void;
					deviceImagePreviewAvailable(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData): void;
					deviceFingerCountChanged(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState): void;
					deviceFingerQualityChanged(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState>): void;
					deviceAcquisitionBegun(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType): void;
					deviceAcquisitionCompleted(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType): void;
					deviceImageResultAvailable(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType, param3: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData>): void;
					deviceImageResultExtendedAvailable(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanException, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param3: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType, param4: number, param5: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData>, param6: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.SegmentPosition>): void;
					devicePlatenStateChanged(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState): void;
					deviceWarningReceived(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanException): void;
					devicePressedKeyButtons(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: number): void;
				});
				public deviceFingerCountChanged(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerCountState): void;
				public deviceFingerQualityChanged(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.FingerQualityState>): void;
				public devicePressedKeyButtons(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: number): void;
				public devicePlatenStateChanged(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.PlatenState): void;
				public deviceImageResultAvailable(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType, param3: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData>): void;
				public deviceAcquisitionBegun(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType): void;
				public deviceImageResultExtendedAvailable(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanException, param2: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData, param3: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType, param4: number, param5: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData>, param6: native.Array<com.integratedbiometrics.ibscanultimate.IBScanDevice.SegmentPosition>): void;
				public deviceCommunicationBroken(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice): void;
				public deviceWarningReceived(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanException): void;
				public deviceAcquisitionCompleted(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageType): void;
				public deviceImagePreviewAvailable(param0: com.integratedbiometrics.ibscanultimate.IBScanDevice, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice.ImageData): void;
			}
		}
	}
}

declare module com {
	export module integratedbiometrics {
		export module ibscanultimate {
			export class IBScanException {
				public getType(): com.integratedbiometrics.ibscanultimate.IBScanException.Type;
			}
			export module IBScanException {
				export class Type {
					public static INVALID_PARAM_VALUE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static MEM_ALLOC: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static NOT_SUPPORTED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static FILE_OPEN: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static FILE_READ: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static RESOURCE_LOCKED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static MISSING_RESOURCE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static INVALID_ACCESS_POINTER: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static THREAD_CREATE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static COMMAND_FAILED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_COMMAND_FAILED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_READ_FAILED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_WRITE_FAILED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_READ_TIMEOUT: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_WRITE_TIMEOUT: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_UNEXPECTED_FAILED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_INVALID_HANDLE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_WRONG_PIPE_INDEX: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_IO: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_NOT_FOUND: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_NOT_MATCHED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_ACTIVE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_NOT_INITIALIZED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_INVALID_STATE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_BUSY: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_NOT_SUPPORTED_FEATURE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static INVALID_LICENSE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static USB20_REQUIRED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_ENABLED_POWER_SAVE_MODE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_NEED_UPDATE_FIRMWARE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_NEED_CALIBRATE_TOF: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static DEVICE_NOT_ACCESSIBLE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_COMMAND_FAILED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_STOP: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_TIMEOUT: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_STILL_RUNNING: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_NOT_RUNNING: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_INVALID_MODE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_ALGORITHM: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_ROLLING: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CAPTURE_ROLLING_TIMEOUT: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static NBIS_NFIQ_FAILED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_FRAME_MISSING: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_CAMERA_WRONG: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static CHANNEL_IO_SLEEP_STATUS: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static OUTDATED_FIRMWARE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static ALREADY_INITIALIZED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static API_DEPRECATED: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static BGET_IMAGE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static ROLLING_NOT_RUNNING: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static NO_FINGER: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static INCORRECT_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static ROLLING_SMEAR: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static ROLLING_SHIFTED_HORIZONTALLY: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static ROLLING_SHIFTED_VERTICALLY: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static ROLLING_SHIFTED_HORIZONTALLY_VERTICALLY: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static EMPTY_IBSM_RESULT_IMAGE: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static QUALITY_INVALID_AREA: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static QUALITY_INVALID_AREA_HORIZONTALLY: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static QUALITY_INVALID_AREA_VERTICALLY: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static QUALITY_INVALID_AREA_HORIZONTALLY_VERTICALLY: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static INVALID_BRIGHTNESS_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static WET_FINGERS: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static MULTIPLE_FINGERS_DURING_ROLL: com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static fromCode(param0: number): com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public static values(): native.Array<com.integratedbiometrics.ibscanultimate.IBScanException.Type>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscanultimate.IBScanException.Type;
					public toCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module integratedbiometrics {
		export module ibscanultimate {
			export class IBScanListener {
				/**
				 * Constructs a new instance of the com.integratedbiometrics.ibscanultimate.IBScanListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					scanDeviceAttached(param0: number): void;
					scanDeviceDetached(param0: number): void;
					scanDevicePermissionGranted(param0: number, param1: boolean): void;
					scanDeviceCountChanged(param0: number): void;
					scanDeviceInitProgress(param0: number, param1: number): void;
					scanDeviceOpenComplete(param0: number, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice, param2: com.integratedbiometrics.ibscanultimate.IBScanException): void;
				});
				public scanDeviceDetached(param0: number): void;
				public scanDeviceCountChanged(param0: number): void;
				public scanDeviceOpenComplete(param0: number, param1: com.integratedbiometrics.ibscanultimate.IBScanDevice, param2: com.integratedbiometrics.ibscanultimate.IBScanException): void;
				public scanDeviceInitProgress(param0: number, param1: number): void;
				public scanDeviceAttached(param0: number): void;
				public scanDevicePermissionGranted(param0: number, param1: boolean): void;
			}
		}
	}
}

