export class Transcript {
    constructor(
      public readonly callId: string,
      public readonly text: string,
      public readonly timestamps?: Array<{ offset: number; duration: number }>,
    ) {}
  }
  