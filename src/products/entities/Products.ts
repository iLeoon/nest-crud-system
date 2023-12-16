import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Products {
	@PrimaryGeneratedColumn()
	product_id: number;

	@Column()
	product_name: string;

	@Column()
	unit_price: number;

	@Column()
	units_in_stock: number;
}
