import { Controller, Get, Param, Post, Logger } from '@nestjs/common';
import { TranscribeCallUseCase } from '@modules/calls/application/transcribe-call.usecase';
import { AnalyzeSentimentUseCase } from '@modules/calls/application/analyze-sentiment.usecase';
import { Transcript } from '@modules/calls/domain/transcript.entity';

@Controller('calls')
export class CallsController {
  private readonly logger = new Logger(CallsController.name);

  constructor(
    private readonly transcribe: TranscribeCallUseCase,
    private readonly analyze: AnalyzeSentimentUseCase,
  ) {}

  @Post(':id/transcript')
  async transcribeCall(@Param('id') callId: string): Promise<Transcript> {
    this.logger.log(`Transcribing call ${callId}`);
    return this.transcribe.execute(callId);
  }

  @Get(':id/sentiment')
  async analyzeSentiment(@Param('id') callId: string) {
    this.logger.log(`Analyzing sentiment for call ${callId}`);
    return this.analyze.execute(callId);
  }
}
