import { Injectable, Logger } from '@nestjs/common';
// import de cliente real, e.g. Google Speech, Whisper SDK, etc.

@Injectable()
export class SpeechToTextService {
  private readonly logger = new Logger(SpeechToTextService.name);

  async transcribe(
    audioUrl: string,
  ): Promise<{ text: string; timestamps: Array<{ offset: number; duration: number }> }> {
    this.logger.log(`Calling STT provider for ${audioUrl}`);
    // TODO: invocar Google Speech API, OpenAI Whisper, etc.
    // Exemplo dummy:
    return {
      text: 'Olá, esta é uma transcrição de exemplo.',
      timestamps: [{ offset: 0, duration: 5000 }],
    };
  }
}
