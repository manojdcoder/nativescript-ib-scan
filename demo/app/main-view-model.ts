import { Observable } from 'tns-core-modules/data/observable';
import { IbScan } from 'nativescript-ib-scan';

export class HelloWorldModel extends Observable {
  public message: string;
  private ibScan: IbScan;

  constructor() {
    super();
    let me = this;

    me.ibScan = new IbScan(
      (deviceId: number) => {
        me.message = `Device ${deviceId} attached`;
      },
      (deviceId: number) => {
        me.message = `Device ${deviceId} detached`;
      }
    );
  }
}
