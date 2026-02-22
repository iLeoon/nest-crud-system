import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
	@PrimaryGeneratedColumn()
	product_id: number;

	@Column()
	product_name: string;

	@Column()
	unit_price: number;

	@Column()
	units_in_stock: number;

	@Column({ default: 0 })
	discontinued: number;
}
