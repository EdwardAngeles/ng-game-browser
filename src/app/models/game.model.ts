export interface Game {
  id: number,
  title: string,
  released: string,
  rating: number,
  genres: string[],
  platforms: string[],
  image_url: string,
  video_url: string
}

export function createGamesFromResults(results): Game[] {
  let games: Game[] = [];
  
  results.forEach(result => {
    let game: Game = {
      id: result.id,
      title: result.name,
      rating: result.rating,
      released: result.released,
      genres: result.genres.map(genre => genre.name),
      platforms: result.platforms.map(item => item.platform.name),
      image_url: result.background_image,
      video_url: result.clip ? result.clip.clip : undefined
    };
    games.push(game);
  });
  
  return games;
}