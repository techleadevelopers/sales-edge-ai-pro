import { Injectable } from '@nestjs/common';
import { SpeechToTextService } from '@modules/calls/infrastructure/speech-to-text.service';
import { Transcript } from '@modules/calls/domain/transcript.entity';

@Injectable()
export class TranscribeCallUseCase {
  constructor(private readonly stt: SpeechToTextService) {}

  async execute(callId: string): Promise<Transcript> {
    // carrega URL/stream do áudio a partir de um repositório (omisso aqui)
    const audioUrl = `https://.../calls/${callId}.mp3`;
    const { text, timestamps } = await this.stt.transcribe(audioUrl);
    return new Transcript(callId, text, timestamps);
  }
}
