import Poll from "../models/poll.model.js";
export const createPoll = async (req, res) => {
  try {
    const { question, options } = req.body;
    const newPoll = new Poll({
      question,
      options: options.map((text) => ({ text, votes: 0 })),
    });
    await newPoll.save();
    res.status(201).json(newPoll);
  } catch (error) {
    res.status(500).json({ error: "Error creating poll" });
  }
};

export const getPoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: "Poll not found" });
    res.json(poll);
  } catch (error) {
    res.status(500).json({ error: "Error fetching poll" });
  }
};

export const votePoll = async (req, res) => {
  try {
    const { optionIndex } = req.body;
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: "Poll not found" });

    poll.options[optionIndex].votes += 1;
    await poll.save();
    res.json(poll);
  } catch (error) {
    res.status(500).json({ error: "Error voting on poll" });
  }
};

export const getPollResults = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: "Poll not found" });
    res.json(poll.options);
  } catch (error) {
    res.status(500).json({ error: "Error fetching results" });
  }
};
