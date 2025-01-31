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

export const getPhaseChange = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const pressure = parseFloat(req.query.pressure as string);

    console.log(pressure);

    const liquidSlope = (10 - 0.05) / (0.0035 - 0.00105);
    const liquidYIntercept = 10 - liquidSlope * 0.0035;

    const vaporSlope = (0.05 - 10) / (30 - 0.0035);
    const vaporYIntercept = 10 - vaporSlope * 0.0035;

    const liquidVolume = (pressure - liquidYIntercept) / liquidSlope;
    const vaporVolume = (pressure - vaporYIntercept) / vaporSlope;

    return res.json({
      specific_volume_liquid: liquidVolume.toFixed(4),
      specific_volume_vapor: vaporVolume.toFixed(4),
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
