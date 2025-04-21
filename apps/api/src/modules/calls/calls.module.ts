import { Module } from '@nestjs/common';
import { CallsController } from '@modules/calls/controllers/calls.controller';
import { TranscribeCallUseCase } from '@modules/calls/application/transcribe-call.usecase';
import { AnalyzeSentimentUseCase } from '@modules/calls/application/analyze-sentiment.usecase';
import { SpeechToTextService } from '@modules/calls/infrastructure/speech-to-text.service';
import { SentimentModelService } from '@modules/calls/infrastructure/sentiment-model.service';

@Module({
  imports: [],
  controllers: [CallsController],
  providers: [
    TranscribeCallUseCase,
    AnalyzeSentimentUseCase,
    SpeechToTextService,
    SentimentModelService,
  ],
})
export class CallsModule {}
