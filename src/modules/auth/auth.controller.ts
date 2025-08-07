import { Request, Response } from 'express';
import * as AuthService from './auth.service';

export async function registerController(req: Request, res: Response) {
  try {
    const result = await AuthService.register(req.body);
    res.status(201).json({ message: 'User registered', user: result });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
}

export async function loginController(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    const result = await AuthService.login(username || email, password);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
}
