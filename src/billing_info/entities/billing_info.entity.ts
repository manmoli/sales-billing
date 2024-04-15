import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BillingInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  Rfc: string;

  @Column({ type: 'varchar', nullable: false })
  Nombre: string;

  @Column({ type: 'varchar', nullable: false })
  DomicilioFiscalReceptor: string;

  @Column({ type: 'varchar', nullable: false })
  RegimenFiscalReceptor: string;

  @Column({ type: 'int', nullable: false })
  customerId: string;
}
