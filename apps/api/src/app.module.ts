// apps/api/src/app.module.ts
import { Module } from '@nestjs/common'

// módulos internos usando alias @modules/*
import { CallsModule } from '@modules/calls/calls.module'


@Module({
  imports: [

    CallsModule,
  ],
  controllers: [],  // controllers globais, se tiver
  providers: [],    // providers globais, se tiver
})
export class AppModule {}
