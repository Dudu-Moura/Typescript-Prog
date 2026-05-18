import { Controller } from '@nestjs/common';
import { MedicsService } from './medics.service';

@Controller('medics')
export class MedicsController {
  constructor(private readonly medicsService: MedicsService) {}
}
