export class CustomError extends Error {
  constructor(
      public name: string,
      public status: number,
      public message: string = ""
  ) {
    super(name);

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
