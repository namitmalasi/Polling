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

export const getPoll = async (req, res) => {};

export const votePoll = async (req, res) => {};

export const getPollResults = async (req, res) => {};
