import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

export function MainImage({title, image, alt, instructions, summary}){
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        title={title}
        />
        <CardMedia
        component="img"
        height="194"
        image={image}
        alt={alt}
        />
        <CardContent>
        <Typography 
            variant="body2" 
            sx={{ color: 'text.secondary' }}
        >
            CLICK THE LINK TO SHOW INSTRUCTIONS AND SUMMARY OF THE DISH
        </Typography>
        </CardContent>
        <CardActions 
            disableSpacing>
            <Link 
                to="/recipeInstructions" 
                state={{instructions: instructions, summary: summary }}
            >
                <Button 
                    variant="outlined"
                >
                    Get Recipe
                </Button>
            </Link>
        </CardActions>
    </Card>
    )
}