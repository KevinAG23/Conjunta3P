// cursos.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { CursoSchema } from './curso.model'; // Asegúrate de importar el schema del modelo Curso

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Curso', schema: CursoSchema }]), // Agrega esta línea para inyectar el modelo
  ],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
