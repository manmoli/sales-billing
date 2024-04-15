import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillingInfoDto {
  @IsNotEmpty()
  @IsString()
  Rfc: string;

  @IsNotEmpty()
  @IsString()
  Nombre: string;

  @IsNotEmpty()
  @IsString()
  DomicilioFiscalReceptor: string;

  @IsNotEmpty()
  @IsString()
  RegimenFiscalReceptor: string;

  @IsNotEmpty()
  @IsNumber()
  customerId;
}
