import nodemailer from "nodemailer"
import { mailConfig } from "../config/mailConfig"

export const transportMail = nodemailer.createTransport(mailConfig)