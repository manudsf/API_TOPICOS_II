import { AppDataSource } from "src/config/datasource";
import { User } from "src/entities/user";

const repo = () => AppDataSource.getRepository(User)
