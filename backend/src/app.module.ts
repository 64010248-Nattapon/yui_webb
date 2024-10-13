import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity'; // นำเข้า Entity ที่เราสร้าง
/*import { AuthModule } from './auth.module'; // นำเข้าโมดูลสำหรับจัดการ Authentication*/

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres_user',  // ใส่ชื่อผู้ใช้ PostgreSQL
      password: 'postgres',       // ใส่รหัสผ่านของ PostgreSQL
      database: 'yui',       // ชื่อฐานข้อมูล
      entities: [User],           // เพิ่ม Entity ของเราที่นี่
      synchronize: true,          // จะทำการสร้างตารางอัตโนมัติเมื่อมีการเปลี่ยนแปลงใน Entity
    }),
    /*AuthModule,*/
  ],
})
export class AppModule {}
