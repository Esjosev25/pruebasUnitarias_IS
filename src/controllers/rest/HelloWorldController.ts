import { Err } from "@tsed/common";
import {Controller} from "@tsed/di";
import { ParamFn, PathParams } from "@tsed/platform-params";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return this.hello();
  }

  @Get("/suma")
  suma(@PathParams("a") a: number,
    @PathParams("b") b: number) {

    return this._sumardosnum(a, b);
  }
  operaciones(@PathParams("a") a: number,
              @PathParams("b") b: number,
              @PathParams("opt") option: string) {
     const opciones={
      suma: "SUMA",
      resta:"RESTA",
      div: "DIV",
      mult: "MULT"
    }
    switch (option) {
      case opciones.suma:
        return this._sumardosnum(a, b);

      case opciones.resta:
        return this._restadosnum(a, b);

      case opciones.div:
        return this._divdosnum(a, b);

      case opciones.mult:
        return this._multdosnum(a, b);
     
    }
    throw new Error("unknown operation, you only use SUMA, RESTA, DIV, MUL");
  }
  hello(){
    return "hello";
  }


  _sumardosnum(a:number, b:number){
    return a+b;
  }
  _restadosnum(a: number, b: number) {
    return a - b;
  }
  _multdosnum(a: number, b: number) {
    return a * b;
  }
  _divdosnum(a: number, b: number) {
    if(b== 0)
      throw new Error("undefined because you tried to divide to 0")
    return a / b;
  }
}
