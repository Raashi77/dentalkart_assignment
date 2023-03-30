import { Box } from '@mui/material';
import './App.css';
import Cart from './Cart';
import { productImages } from './config';
function App() {
  const products=[
    {
      id: 1,
      name: 'Ceramic Bracket Kit MBT 0.22',
      description: 'Ceramic Brackets',
      price: 250,
      image: productImages.product1,
    },
    {
      id: 2,
      name: 'Bomedent Green Plum Apex Locator',
      description: '5th generation modern apex locator',
      price: 5995,
      image: productImages.product2,
    },
    {
      id: 3,
      name: 'Russia Tor Vm Sectional Contoured Matrices Kits',
      description: 'Sectional Contoured Matrix Bands with Rings',
      price: 1500,
      image: productImages.product3,
    },
    {
      id: 4,
      name: 'Waldent Self-Seal Sterilization Pouches',
      description: 'Sterilization Pouches',
      price: 195,
      image: productImages.product4,
    },
    {
      id: 5,
      name: 'Fiber Post With 4 Drills ( Pack of 20 Posts )',
      description: 'High-Intensity quartz Fiber resin post',
      price: 425,
      image: productImages.product5,
    },
    {
      id: 6,
      name: 'Waldent RCTprep EDTA',
      description: '17% EDTA Gel with Carbamide Peroxide',
      price: 120,
      image: productImages.product6,
    },
    {
      id: 7,
      name: '3m Espe Ketac Molar Gi Filling Cement',
      description: 'Restorative Glass ionomer cement with High flexural strength.',
      price: 1789,
      image: productImages.product7,
    },
    {
      id: 8,
      name: 'EndoKing Cordless Endomotor LED',
      description: 'Lightweight Cordless LED Endomotor with 16:1 Reduction Contra Angle 7 Memory Set',
      price: 7495,
      image: productImages.product8,
    },
    {
      id: 9,
      name: 'Dentaids Lidayn Spray',
      description: 'Mint flavored topical aerosol anesthetic spray',
      price: 268,
      image: productImages.product9,
    },
    {
      id: 10,
      name: 'Dental Mouth Mirror Tops (Pk Of 10)',
      description: 'Mouth Mirror Tops',
      price: 120,
      image: productImages.product10,
    },
    {
      id: 11,
      name: 'Zhermack Zetaplus C Silicone Intro Kit (Base + Catalyst + Light Body) (C100730)',
      description: 'Zetaplus C Silicone Intro Kit is Rubber Based condensation Impression Material.',
      price: 1995,
      image: productImages.product11,
    },
    {
      id: 12,
      name: 'Waldent 3-Way Syringe - Standard',
      description: '3-Ways Syringe with Two Autoclavable Tips',
      price: 490,
      image: productImages.product12,
    },
    {
      id: 13,
      name: 'Finger Pulse Oximeter With TFT Display',
      description: 'Heart rate,SpO2 PR pulse oximeter',
      price: 250,
      image: productImages.product13,
    },
    {
      id: 14,
      name: 'Covid-19 Rapid Antigen Test Kit',
      description: 'Rapid antigen test kit',
      price: 150,
      image: productImages.product14,
    },
    {
      id: 15,
      name: 'Woodpecker UDS-J Ultrasonic Scaler (5 scaler Tips FREE)',
      description: 'piezo-electric Ultrasonic Scaler',
      price: 6995,
      image: productImages.product15,
    },
    {
      id: 16,
      name: 'Shofu Super Snap Mini Kit CA',
      description: 'Finishing & Polishing Kits',
      price: 1290,
      image: productImages.product16,
    },
    {
      id: 17,
      name: 'GDC Root Elevator Set Of 9 In Pouch (RESP9)',
      description: 'Root elevator set Of 9 for tissue preserving extraction.',
      price: 4950,
      image: productImages.product17,
    },
    {
      id: 18,
      name: 'Prevest Fusion Universal Composite Kit',
      description: 'Light Cured Universal Nano Hybrid Composite',
      price: 2950,
      image: productImages.product18,
    },
    {
      id: 19,
      name: 'Dentsply Spectrum Composite Kit',
      description: 'Light Cured Universal Nano Hybrid CompositeUniversal Microhybrid Composite Restorative kit',
      price: 3435,
      image: productImages.product19,
    },
    {
      id: 20,
      name: 'Prevest-Denpro Magma Nt Kit',
      description: 'Composite Material with Nano Silica and Zirconia Fillers for High Strength & Polishibility',
      price: 3750,
      image: productImages.product20,
    }
]
   
  return (
    <Box sx={{background:"#f1f3f6"}}>
      <Cart />
    </Box>
  );
}

export default App;
