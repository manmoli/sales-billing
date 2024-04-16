import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingInfoModule } from './billing_info/billing_info.module';
import { BillingInfo } from './billing_info/entities/billing_info.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'workshop-admin',
      entities: [BillingInfo],
      synchronize: true,
    }),
    BillingInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
