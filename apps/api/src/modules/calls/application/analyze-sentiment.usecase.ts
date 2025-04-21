import { Injectable } from '@nestjs/common';
import { SentimentModelService } from '@modules/calls/infrastructure/sentiment-model.service';


@Injectable()
export class AnalyzeSentimentUseCase {
  constructor(private readonly sentiment: SentimentModelService) {}

  async execute(callId: string) {
    // obtém a transcrição (omitido fetch real)
    const transcript = 'Texto transcrito da call...';
    // roda análise de sentimento
    const result = await this.sentiment.analyze(transcript);
    return {
      callId,
      sentimentScore: result.score,
      segments: result.segments,  // e.g. [{ text, score, start, end }]
    };
  }
}
