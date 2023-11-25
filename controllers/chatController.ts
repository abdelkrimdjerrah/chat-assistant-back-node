import axios from "axios";
import { Request, Response, NextFunction } from "express";

// @desc Get text summary
// @route GET /api/summary
// @access Private
const getSummary = async (req: Request, res: Response) => {
  try {
    const text = req.body.text;

    if (!text) {
      return res
        .status(400)
        .json({ success: false, message: "Text invalid" });
    }


    const options = {
      method: 'POST',
      url: 'https://gpt-summarization.p.rapidapi.com/summarize',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'ea8ab30eadmshe895b9cbb8a476fp1ea342jsnff70dd151c87',
        'X-RapidAPI-Host': 'gpt-summarization.p.rapidapi.com'
      },
      data: {
        text: text,
        num_sentences: 3
      }
    };


      const response = await axios.request(options);

      return res.status(200).json({ success: true, summary: response.data.summary });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



export default {
  getSummary
};
