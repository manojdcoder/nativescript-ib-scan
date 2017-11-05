/* tslint:disable */

declare module com {
	export module integratedbiometrics {
		export module ibscancommon {
			export class IBCommon {
			}
			export module IBCommon {
				export class CaptureDeviceTechId {
					public static UNKNOWN_OR_UNSPECIFIED: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static WHITE_LIGHT_OPTICAL_TIR: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static WHITE_LIGHT_OPTICAL_DIRECT_VIEW_ON_PLATEN: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static WHITE_LIGHT_OPTICAL_TOUCHLESS: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MONOCHROMATIC_VISIBLE_OPTICAL_TIR: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MONOCHROMATIC_VISIBLE_OPTICAL_DIRECT_VIEW_ON_PLATEN: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MONOCHROMATIC_VISIBLE_OPTICAL_TOUCHLESS: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MONOCHROMATIC_IR_OPTICAL_TIR: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MONOCHROMATIC_IR_OPTICAL_DIRECT_VIEW_ON_PLATEN: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MONOCHROMATIC_IR_OPTICAL_TOUCHLESS: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MULTISPECTRAL_OPTICAL_TIR: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MULTISPECTRAL_OPTICAL_DIRECT_VIEW_ON_PLATEN: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MULTISPECTRAL_OPTICAL_TOUCHLESS: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static ELECTRO_LUMINESCENT: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static SEMICONDUCTOR_CAPACITIVE: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static SEMICONDUCTOR_RF: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static SEMICONDUCTOR_THEMAL: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static PRESSURE_SENSITIVE: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static ULTRASOUND: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static MECHANICAL: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static GLASS_FIBER: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static values(): native.Array<com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public static fromCode(param0: number): com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public toCode(): number;
				}
				export class FingerPosition {
					public static UNKNOWN: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_THUMB: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_INDEX_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_MIDDLE_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_RING_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_LITTLE_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_THUMB: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_INDEX_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_MIDDLE_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_RING_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_LITTLE_FINGER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static PLAIN_RIGHT_FOUR_FINGERS: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static PLAIN_LEFT_FOUR_FINGERS: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static PLAIN_THUMBS: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static UNKNOWN_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_FULL_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_WRITERS_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_FULL_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_WRITERS_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_LOWER_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_UPPER_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_LOWER_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_UPPER_PALM: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_OTHER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_OTHER: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_INTERDIGITAL: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_THENAR: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_HYPOTHENAR: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_INTERDIGITAL: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_THENAR: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_HYPOTHENAR: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_INDEX_AND_MIDDLE: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_MIDDLE_AND_RING: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_RING_AND_LITTLE: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_INDEX_AND_MIDDLE: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_MIDDLE_AND_RING: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_RING_AND_LITTLE: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_INDEX_AND_LEFT_INDEX: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_INDEX_AND_MIDDLE_AND_RING: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static RIGHT_MIDDLE_AND_RING_AND_LITTLE: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_INDEX_AND_MIDDLE_AND_RING: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static LEFT_MIDDLE_AND_RING_AND_LITTLE: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static fromCode(param0: number): com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public static values(): native.Array<com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition>;
					public static valueOf(param0: string): com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public toCode(): number;
				}
				export class ImageDataExt {
					public imageFormat: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public impressionType: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public fingerPosition: com.integratedbiometrics.ibscancommon.IBCommon.FingerPosition;
					public captureDeviceTechId: com.integratedbiometrics.ibscancommon.IBCommon.CaptureDeviceTechId;
					public captureDeviceVendorId: number;
					public captureDeviceTypeId: number;
					public scanSamplingX: number;
					public scanSamplingY: number;
					public imageSamplingX: number;
					public imageSamplingY: number;
					public imageSizeX: number;
					public imageSizeY: number;
					public scaleUnit: number;
					public bitDepth: number;
					public imageData: native.Array<number>;
					public toString(): string;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: native.Array<number>);
				}
				export class ImageFormat {
					public static NO_BIT_PACKING: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static BIT_PACKED: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static WSQ: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static JPEG_LOSSY: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static JPEG2000_LOSSY: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static JPEG2000_LOSSLESS: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static PNG: com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static valueOf(param0: string): com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public static values(): native.Array<com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat>;
					public static fromCode(param0: number): com.integratedbiometrics.ibscancommon.IBCommon.ImageFormat;
					public toCode(): number;
				}
				export class ImpressionType {
					public static LIVE_SCAN_PLAIN: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LIVE_SCAN_ROLLED: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static NONLIVE_SCAN_PLAIN: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static NONLIVE_SCAN_ROLLED: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_IMPRESSION: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_TRACING: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_PHOTO: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_LIFT: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LIVE_SCAN_SWIPE: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LIVE_SCAN_VERTICAL_ROLL: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LIVE_SCAN_PALM: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static NONLIVE_SCAN_PALM: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_PALM_IMPRESSION: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_PALM_TRACING: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_PALM_PHOTO: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LATENT_PALM_LIFT: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static LIVE_SCAN_OPTICAL_CONTRCTLESS_PLAIN: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static OTHER: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static UNKNOWN: com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static valueOf(param0: string): com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public static values(): native.Array<com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType>;
					public static fromCode(param0: number): com.integratedbiometrics.ibscancommon.IBCommon.ImpressionType;
					public toCode(): number;
				}
			}
		}
	}
}