import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemasController } from './temas.controller';
import { TemasService } from './temas.service';
import { TemaSchema } from './tema.model'; // Asegúrate de importar el schema del modelo Tema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tema', schema: TemaSchema }]), // Agrega esta línea para inyectar el modelo
  ],
  controllers: [TemasController],
  providers: [TemasService],
})
export class TemasModule {}
