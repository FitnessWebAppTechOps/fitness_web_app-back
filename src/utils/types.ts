export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// this is my app - "
// export interface Survey {
//     id?: string;
//     creatorId: string;
//     surveyName: string;
//     surveyDescription: string;
//     content: Array<Question>;
//     annonimous: boolean;
//     repliers: Array<string>;
//     isOpen: boolean;
//   }

//   export interface Question {
//     id?: string;
//     questionName: string;
//     questionType: QuestionType;
//     required: boolean;
//     answers?: Array<Answer>;
//   }
//   export interface Answer {
//     id?: string;
//     answer: string;
//   }

//   export enum QuestionType {
//     shortAnswer = "SHORT_ANSWER",
//     longAnswer = "LONG_ANSWER",
//     radio = "RADIO",
//     checkbox = "CHECKBOX",
//     select = "SELECT",
//     title = "TITLE",
//   }
//   import * as mongoose from "mongoose";
// import { QuestionType, Survey } from "./questions.interface";

// const answerSchema: mongoose.Schema = new mongoose.Schema(
//   {
//     answer: {
//       type: String,
//     },
//     connectedAt: {
//       type: Date,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//       transform(_doc, ret) {
//         delete ret._id;
//       },
//     },
//     versionKey: false,
//     id: true,
//   }
// );

// const questionSchema: mongoose.Schema = new mongoose.Schema(
//   {
//     questionName: {
//       type: String,
//     },
//     questionType: {
//       type: String,
//       enum: QuestionType,
//       required: true,
//     },
//     required: {
//       type: Boolean,
//       required: true,
//     },
//     answers: {
//       type: [answerSchema],
//       required: true,
//       id: true,
//     },
//     connectedAt: {
//       type: Date,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//       transform(_doc, ret) {
//         delete ret._id;
//       },
//     },
//     versionKey: false,
//     id: true,
//   }
// );

// const surveySchema: mongoose.Schema = new mongoose.Schema(
//   {
//     surveyName: {
//       type: String,
//       required: true,
//     },
//     surveyDescription: {
//       type: String,
//       required: true,
//     },
//     creatorId: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: [questionSchema],
//       required: true,
//       id: true,
//     },
//     annonimous: {
//       type: Boolean,
//     },
//     repliers: {
//       type: [String],
//     },
//     isOpen: {
//       type: Boolean,
//       default: false,
//     },
//     connectedAt: {
//       type: Date,
//     },
//     lastUpdated: { type: Date, default: Date.now },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//       transform(_doc, ret) {
//         delete ret._id;
//       },
//     },
//     versionKey: false,
//     id: true,
//     timestamps: { createdAt: true, updatedAt: false },
//   }
// );

// surveySchema.index({ firstName: 1, lastName: 1 });

// export const QuestionModel = mongoose.model<Survey & mongoose.Document>(
//   "Survey",
//   surveySchema
// );
// export class QuestionRepository {
//     static createSurvey(
//       surveyName: string,
//       surveyDescription: string,
//       creatorId: string,
//       content: Array<Question>,
//       annonimous: boolean
//     ): Promise<Survey> {
//       return QuestionModel.create({
//         surveyName,
//         surveyDescription,
//         creatorId,
//         content,
//         annonimous,
//         repliers: [],
//         isOpen: true,
//       } as Survey);
//     }
//     export class QuestionManager {
//     static async createSurvey(
//         surveyName: string,
//         surveyDescription: string,
//         creatorId: string,
//         content: Array<Question>,
//         annonimous: boolean
//       ): Promise<Survey> {
//         return QuestionRepository.createSurvey(
//           surveyName,
//           surveyDescription,
//           creatorId,
//           content,
//           annonimous
//         );
//       }}
//       export class QuestionController {
//         static async createSurvey(req: Request, res: Response): Promise<void> {
//             res.json(
//               await QuestionManager.createSurvey(
//                 req.body.surveyName,
//                 req.body.surveyDescription,
//                 req.body.creatorId,
//                 req.body.content,
//                 req.body.annonimous,
//               )
//             );
//           }}
//     const QuestionRouter: Router = Router();

//     QuestionRouter.post('/createSurvey', ValidateRequest(createSurveyReqSchema), wrapAsync(QuestionController.createSurvey));
//     const AppRouter: Router = Router();

//     AppRouter.use('/api/questions', QuestionRouter);

//     /* istanbul ignore next */
//     AppRouter.use('/isalive', (_req, res) => {
//       res.status(200).send('alive');
//     });

//     AppRouter.use('*', (_req, res) => {
//       res.status(404).send('Invalid Route');
//     });
//     export class Server {
//         public app: express.Application;

//         private server: http.Server;

//         public static startServer(): Server {
//           return new Server();
//         }

//         public closeServer(): void {
//           this.server.close();
//         }

//         private constructor() {
//           this.app = express();
//           this.app.use(cors());
//           this.configurationMiddleware();
//           this.app.use(AppRouter);
//           this.app.use(errorMiddleware);
//           this.server = this.app.listen(config.server.port, () => {
//             logger.log(SeverityLevel.Informational, `${config.server.name} listening on port ${config.server.port}`);
//           });
//         }

//         private setHeaders = (req: express.Request, res: express.Response,
//           next: express.NextFunction) => {
//           res.setHeader('Access-Control-Allow-Credentials', 'true');
//           res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//           res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');

//           /* istanbul ignore next */
//           if (req.method === 'OPTIONS') {
//             /* istanbul ignore next */
//             return res.status(200).end();
//           }

//           return next();
//         };

//         private configurationMiddleware() {
//           this.app.use(morgan('dev'));
//           this.app.use(this.setHeaders);
//           this.app.use(bodyParser.json());
//           this.app.use(bodyParser.urlencoded({ extended: true }));
//         }
//       }
//       ((): void => {
//         mongoose.connect(config.db.connectionString, {
//           dbName: config.db.dbName,
//         });

//         mongoose.connection.on('connecting', () => {
//           logger.log(SeverityLevel.Informational, '[MongoDB] connecting...');
//         });

//         mongoose.connection.on('connected', () => {
//           logger.log(SeverityLevel.Informational, '[MongoDB] connected');
//         });

//         mongoose.connection.on('error', () => {
//           logger.log(SeverityLevel.Informational, '[MongoDB] error');
//         });

//         mongoose.connection.on('disconnected', () => {
//           logger.log(SeverityLevel.Informational, '[MongoDB] disconnected');
//         });

//         Server.startServer();
//       })();
//     "
// implement authentication and authentication with google account using npm passport.
