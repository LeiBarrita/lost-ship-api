import { Request, Response } from "express";

export const getStatus = async (req: Request, res: Response): Promise<any> => {
  try {
    return res.json({
      damaged_system: "navigation",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getRepairBay = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Repair</title>
        </head>
        <body>
        <div class="anchor-point">NAV-01</div>
        </body>
        </html>
    `);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const postTeapot = async (req: Request, res: Response): Promise<any> => {
  try {
    return res.sendStatus(418);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
