import React from 'react';
import { Paper, styled, Typography, Button} from '@mui/material';
import mainpagephoto from '../../assets/images/mainpagephoto.jpg';
import AboutYogacenter from '../AboutYogacenter/AboutYogacenter';
import Contacts from '../Contacts/Contacts';

const StyledPaper = styled(Paper)(({ theme }) => ({
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(6),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${mainpagephoto})`,
    width: '100%',
    height: '800px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const FullOverlay = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const TextOverlay = styled('div')({
    textAlign: 'center',
    zIndex: 1,
});

const Body: React.FC = () => {
   

    

    return (
        <>
            <StyledPaper>
                <FullOverlay>
                    <TextOverlay>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Центр йоги «Гармония движения»
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Здоровье и хорошее настроение вместе с нами
                        </Typography>
                        <Button 
                            variant="contained" 
                            href='https://t.me/Kulich_21'
                            
                            sx={{ 
                                bgcolor: '#9370DB', 
                                color: '#fff', 
                                '&:hover': {backgroundColor: '#7A5DC7', }}}
                            >
                            Записаться
                        </Button>
                    </TextOverlay>
                </FullOverlay>
                    </StyledPaper>
                    <AboutYogacenter/>
            <Contacts/>
        </>
    );
};

export default Body;
