import movies from '../data/movies.js';

export const getAllMovies = (req, res) =>
{
    res.status(200).json(movies)
}

export const getMovieById = (req, res) =>
{
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'Movie not found'})
    }
    res.status(200).json(movies[id])
}

export const createMovie = (req, res) =>
{
    const movie = req.body
    if (!movie.title || !movie.director || !movie.year || movie.oscaraward === undefined) {
        return res.status(400).json({message: 'Missing data'})
    }

    movies.push(movie)
    res.status(200).json(movie)
}

export const updateMovie = (req, res) =>
{
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'Movie not found'})
    }
    else
    {
        const movie = req.body
        if(!movie.title || !movie.director || !movie.year || movie.oscaraward === undefined) {
            return res.status(400).json({message: 'Invalid data'})
        }
        movies[id] = movie
        res.status(200).json(movie)
    }
}
    
export const deleteMovies = (req, res) =>
{
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'Movie not found'})
    }
    else
    {
        movies.splice(id, 1)
        res.status(200).json({message: 'Movie deleted'})
    }
}

