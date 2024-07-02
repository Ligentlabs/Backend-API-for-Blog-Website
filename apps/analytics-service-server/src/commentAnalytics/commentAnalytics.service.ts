import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentAnalyticsServiceBase } from "./base/commentAnalytics.service.base";

@Injectable()
export class CommentAnalyticsService extends CommentAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
