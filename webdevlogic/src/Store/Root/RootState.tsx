import { ITestState } from "../../Interfaces/State/ITestState";
import { IIntlState } from "../../Interfaces/State/IIntlState";

export type IState = {
   test: ITestState,
   intl:IIntlState
}