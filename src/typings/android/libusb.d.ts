/* tslint:disable */

declare module org {
	export module libusb {
		export class LibUsbManager {
			public static getDeviceArray(): native.Array<org.libusb.LibUsbManager.DeviceDesc>;
			public static openDevice(param0: number): number;
			public static setContext(param0: androidcontentContext): void;
			public static closeDevice(param0: number): void;
		}
		export module LibUsbManager {
			export class DeviceDesc {
				public deviceId: number;
				public descriptors: native.Array<number>;
				public constructor(param0: number, param1: native.Array<number>);
			}
		}
	}
}