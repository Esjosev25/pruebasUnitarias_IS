import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });


  it("hello function should return hello",()=>{
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    console.log(instance)
    expect(instance.hello()).toBe("hello");
  })
  it("get function should return hello", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    console.log(instance)
    expect(instance.get()).toBe("hello");
  })


  it("sum equals 2",()=>{
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 2;
    expect(instance.suma(a,b)).toBe(3);
  });

  it("sum operation", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 2;
    const  op="SUMA";
    expect(instance.operaciones(a, b,op)).toBe(3);
  });

  it("minus operation", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 2;
    const op = "RESTA";
    expect(instance.operaciones(a, b, op)).toBe(-1);
  });
  it("mul operation", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 2;
    const op = "MULT";
    expect(instance.operaciones(a, b, op)).toBe(2);
  });

  it("div operation", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 2;
    const op = "DIV";
    expect(instance.operaciones(a, b, op)).toBe(1/2);
  });

  it("zero div operation", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 0;
    const op = "DIV";
    
    expect(() => instance.operaciones(a, b, op)).toThrow(new Error("undefined because you tried to divide to 0"));
  });


  it("zero div operation", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 0;
    const op = "LOL";
    
    expect(()=>instance.operaciones(a, b, op)).toThrow(new Error("unknown operation, you only use SUMA, RESTA, DIV, MUL"));
  });


  it("mock zero div operation", ()=>{
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a = 1;
    const b = 1;
    const op = "DIV";
    
    const fnOp = jest.spyOn(instance, "operaciones").mockReturnValueOnce(0);

    expect(instance.operaciones(a,b,op)).toBe(0);
    expect(instance.operaciones(a,b,op)).toBe(1);
    expect(fnOp).toBeCalled();
    expect(fnOp).toBeCalledTimes(2);
  })
});
