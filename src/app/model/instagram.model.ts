export class Insta {
  constructor(
    public pseudo: string,
    public titre: string,
    public date: Date,
    public description: string,
    public localisation: string,
    public nbrAime: number,
    public imageUrl: string,
    public nbrAimeCom: number,
    public commentaire: string[]
  )
  {}
}