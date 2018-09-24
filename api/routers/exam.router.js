import {Router} from 'express';
import * as controllexam from "../controlls/exam.controller";
const router = new Router();
console.log(controllexam);
router.route('/home')
      .get(controllexam.getViewExam);
export default router;
