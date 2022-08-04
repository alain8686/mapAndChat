import { FileInfo } from "./fileInfo";

export class Message
{
    public fromId: any;
    public toId: any;
    public message: string;
    public seenOn?: Date;
    public file: FileInfo;
}