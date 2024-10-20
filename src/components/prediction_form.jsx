import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Grid, Typography, Paper, Container, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chart from './chart'; // Assuming you have the chart component.

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: '30px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  background: 'linear-gradient(135deg, #f0f8ff, #e6e6fa)',
  transition: 'all 0.4s ease-in-out',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)',
  },
  border: '3px solid rgba(255, 255, 255, 0.7)',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: "#000053",
  fontWeight: 'bold',
  textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
  fontSize: '2.5rem',
  letterSpacing: '1px',
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2, 6),
  borderRadius: '40px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  transition: 'all 0.4s ease',
  background: 'linear-gradient(45deg, #000053 30%, #1C1C84 90%)',
  color: 'white',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.05)',
    boxShadow: '0 15px 30px rgba(33, 150, 243, 0.4)',
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.3)',
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.3)',
    },
  },
}));

const BackgroundContainer = styled('div')({
  backgroundImage: 'url("/path/to/your/image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  padding: '20px',
});

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    COUNTRY: '',
    FORMATION: '',
    FIELD: '',
    DAYS: '',
    'WHP, Psi': '',
    GOR: '',
    'GAS CUM PROD, MSCF': '',
    'OIL CUM PROD, STB': '',
    'CUM WATER PROD, RB': '',
    'WATER CUT, %': '',
    'DAILY GAS PROD, MSCF/D': '',
    'DAILY OIL PROD, STB/D': '',
    'DAILY WATER PROD , RB/D': '',
    'DAILY PROD FLUID, BLP/D': '',
    'TOTAL PRODUCED FLUID, STB': '',
  });
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('artificail-lifter-flask-api.vercel.app/predict', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data);
      setChartData(data);
      console.log('Prediction Result:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const countryOptions = ['USA'];
  const formationOptions = ['Eagle Ford'];
  const fieldOptions = ['well 0', 'well 1', 'well 2', 'well 3', 'well 4', 'well 5', 'well 6', 'well 7', 'well 8', 'well 9', 'well 10'];

  return (
    <BackgroundContainer>
      

<div style={{
  backgroundColor: 'white',
  color: '#000053',
  border: '2px solid #ccc',
  borderRadius: '50px',
  textAlign: 'center',
  margin: '0 auto',
  width: "70%",

}}>

  <StyledTypography variant="h1" gutterBottom style={{ color: '#00053', fontSize:"20px",fontWeight:800, borderRadius: '50% !important', padding:'15px 0px', margin: '0 auto'}}>
    Muhammad Zaid(GL)(20PG055)  Waseem Ahmed(A.G.L)20PG047  Dost Mohammad (Member )(20PG041)
  </StyledTypography>

</div>


                        <StyledTypography variant="h1" gutterBottom style={{ color: '#fff',marginTop:"20px" }}>
                           Artificial Lift Selection Application
                         </StyledTypography>
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} >
            <StyledPaper elevation={5} style={{height:"90%" ,marginTop:"-10px"}}>
              <StyledTypography variant="h4" gutterBottom>
                Input Data
              </StyledTypography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <StyledFormControl fullWidth>
                          <InputLabel id="country-label">COUNTRY</InputLabel>
                          <Select
                            labelId="country-label"
                            label="COUNTRY"
                            name="COUNTRY"
                            value={formData.COUNTRY}
                            onChange={handleInputChange}
                          >
                            {countryOptions.map((country, i) => (
                              <MenuItem key={i} value={"0"}>
                                {country}
                              </MenuItem>
                            ))}
                          </Select>
                        </StyledFormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledFormControl fullWidth>
                          <InputLabel id="formation-label">FORMATION</InputLabel>
                          <Select
                            labelId="formation-label"
                            label="FORMATION"
                            name="FORMATION"
                            value={formData.FORMATION}
                            onChange={handleInputChange}
                          >
                            {formationOptions.map((formation, i) => (
                              <MenuItem key={i} value={"0"}>
                                {formation}
                              </MenuItem>
                            ))}
                          </Select>
                        </StyledFormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <StyledFormControl fullWidth>
                          <InputLabel id="field-label">FIELD</InputLabel>
                          <Select
                            labelId="field-label"
                            label="FIELD"
                            name="FIELD"
                            value={formData.FIELD}
                            onChange={handleInputChange}
                          >
                            {fieldOptions.map((field, i) => (
                              <MenuItem key={i} value={field}>
                                {field}
                              </MenuItem>
                            ))}
                          </Select>
                        </StyledFormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  {Object.keys(formData).slice(3).map((field, index) => (
                    <Grid item xs={12} sm={6} key={field}>
                      <StyledTextField
                        fullWidth
                        label={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  ))}
                </Grid>
                <StyledButton type="submit" fullWidth>
                  Predict
                </StyledButton>
              </form>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6} style={{marginTop:"-50px"}}>
            {result ? (
              <StyledPaper elevation={5}>
                <div style={{ padding: '20px', background: 'linear-gradient(135deg, #f0f8ff, #e6e6fa)' }}>
                  {result.predicted_probabilities && result.predicted_probabilities[0] ? (
                    <>
                      <Typography variant="h6" gutterBottom style={{ color: '#000053', fontWeight: 'bold' }}>
                      </Typography>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {[
                          { label: 'Gas Lift', value: result.predicted_probabilities[0][0] },
                          { label: 'Jet Pump', value: result.predicted_probabilities[0][1] },
                          { label: 'Sucker Road Pump', value: result.predicted_probabilities[0][2] }
                        ].map((item, index) => (
                          <div key={index} style={{ flex: '1 0 33.33%', margin: '10px', textAlign: 'center' }}>
                            <Typography variant="body2" style={{ marginBottom: '5px' }}>
                              {item.label}
                            </Typography>
                            <div style={{ 
                              background: '#000053', 
                              color: 'white', 
                              padding: '10px', 
                              borderRadius: '5px',
                              fontWeight: 'bold',
                              fontSize: '1.2em'
                            }}>
                              {(item.value * 100).toFixed(2)}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Typography variant="body1">No prediction results available.</Typography>
                  )}
                </div>
              </StyledPaper>
            ) : (
              <StyledPaper elevation={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85%',marginTop:"35px" }}>
                <Typography variant="body1">Prediction results will appear here</Typography>
              </StyledPaper>
            )}
            {chartData && (
              <StyledPaper elevation={5} style={{ marginTop: '20px', background: 'linear-gradient(135deg, #f0f8ff, #e6e6fa)', height: '385px' }}>
                <Chart data1={result.predicted_probabilities} />
              </StyledPaper>
            )}
          </Grid>
        </Grid>
      </Container>
    </BackgroundContainer>
  );
};

export default PredictionForm;