export class CallRecording {
    constructor(
      public readonly callId: string,
      public readonly storagePath: string,   // localização do arquivo de áudio
      public readonly durationSeconds: number,
    ) {}
  }
  