import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import { Container } from '@mui/material/';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
  {
    price: "85",
    rating: 5,
    name: 'Affordable suspension',
    description: 'Monotube design is essential for performance. The oil and nitrogen are separated by a floating piston, and allows the use of a larger piston, increasing the damper performance and sensitivity felt by the driver, all this added together produces more grip, gives more control and driver feedback from your vehicle. Advanced Suspension Technology® (AST) was founded by two motorsport enthusiasts in late 2000. Their technical expertise in suspension development and industrial manufacturing pushed AST to the forefront even in the early stages of the company. Today, the company is globally recognized as a foremost manufacturer of innovative suspension systems and components. AST made its name through unparalleled quality control and manufacturing flexibility, setting it apart from many others in the suspension industry. AST shock absorbers and other exhaust components are products of choice of numerous car manufacturers and racing teams worldwide.',
    img: 'https://i.ibb.co/YfyHcHv/suspension.webp'
  },
  {
    price: "87",
    rating: 4,
    name: 'Halogen headlights',
    description: 'Halogen headlights can be found on approximately 80% of the cars on the road today, making them the most common type of headlights currently available. They offer many advantages: they’re cheap to manufacture, easy to replace, give a bright, yellow-white light and last up to 1,000 hours. A halogen headlight consists of a thin tungsten filament surrounded by a halogen gas in a glass filament capsule which is extremely resistant to high temperatures. It works by sending electricity through the tungsten filament inside the glass capsule. The electrical current heats up the tungsten to approximately 2,500° Celsius and it starts to glow (incandescent process). The bulb uses an inert gas and a small amount of a halogen such as iodine or bromine.',
    img: 'https://i.ibb.co/r2rKNLs/headlight.webp'
  },
  {
    price: "99",
    rating: 5,
    name: 'Shock Absorber',
    description: 'A shock absorber or damper is a mechanical or hydraulic device designed to absorb and damp shock impulses. It does this by converting the kinetic energy of the shock into another form of energy (typically heat) which is then dissipated. Most shock absorbers are a form of dashpot (a damper which resists motion via viscous friction). Pneumatic and hydraulic shock absorbers are used in conjunction with cushions and springs. An automobile shock absorber contains spring-loaded check valves and orifices to control the flow of oil through an internal piston (see below). One design consideration, when designing or choosing a shock absorber, is where that energy will go. In most shock absorbers, energy is converted to heat inside the viscous fluid. In hydraulic cylinders, the hydraulic fluid heats up, while in air cylinders, the hot air is usually exhausted to the atmosphere. In other types of shock absorbers, such as electromagnetic types, the dissipated energy can be stored and used later. In general terms, shock absorbers help cushion vehicles on uneven roads.',
    img: 'https://i.ibb.co/kJQpCfb/Shock-absorber.webp'
  },
  {
    price: "69",
    rating: 3,
    name: 'Pneumatic Tires',
    description: 'The materials of modern pneumatic tires are synthetic rubber, natural rubber, fabric and wire, along with carbon black and other chemical compounds. They consist of a tread and a body. The tread provides traction while the body provides containment for a quantity of compressed air. Before rubber was developed, the first versions of tires were simply bands of metal fitted around wooden wheels to prevent wear and tear. Early rubber tires were solid (not pneumatic). Pneumatic tires are used on many types of vehicles, including cars, bicycles, motorcycles, buses, trucks, heavy equipment, and aircraft. Metal tires are still used on locomotives and railcars, and solid rubber (or other polymer) tires are still used in various non-automotive applications, such as some casters, carts, lawnmowers, and wheelbarrows.A belted bias tire starts with two or more bias-plies to which stabilizer belts are bonded directly beneath the tread. This construction provides smoother ride that is similar to the bias tire, while lessening rolling resistance because the belts increase tread stiffness. The design was introduced by Armstrong, while Goodyear made it popular with the "Polyglas" trademark tire featuring a polyester carcass with belts of fiberglass.[42] The "belted" tire starts two main plies of polyester, rayon, or nylon annealed as in conventional tires, and then placed on top are circumferential belts at different angles that improve performance compared to non-belted bias tires. The belts may be fiberglass or steel',
    img: 'https://i.ibb.co/BLj8HZv/Tire.webp'
  },
  {
    price: "79",
    rating: 5,
    name: 'Automobile Piston',
    description: 'The slugs of aluminum inside your engine live in a fiery hell. At full throttle and 6000 rpm, a piston in a gasoline engine is subjected to nearly 10 tons of force every 0.02 second as repeated explosions heat the metal to more than 600 degrees Fahrenheit. These days, that cylindrical Hades is hotter and more intense than ever, and it’s only likely to get worse for pistons. As automakers chase higher efficiency, piston manufacturers are preparing for a future in which the most-potent naturally aspirated gasoline engines produce 175 horsepower per liter, up from 130 today. With turbocharging and increased outputs come even tougher conditions. In the past decade, piston operating temperatures have climbed 120 degrees, while peak cylinder pressures have swollen from 1500 psi to 2200. A piston tells a story about the engine in which it resides. The crown can reveal the bore, the number of valves, and whether or not the fuel is directly injected into the cylinder. Yet a piston’s design and technology can also say a lot about the wider trends and challenges facing the auto industry. To coin a maxim: As the automobile goes, so goes the engine; and as the engine goes, so goes the piston. In the quest for improved fuel economy and lower emissions, automakers are asking for lighter, lower-friction pistons with the stamina to endure tougher operating conditions. It is these three concerns—durability, friction, and mass—that consume the piston suppliers’ workdays.',
    img: 'https://i.ibb.co/7rsx8B3/piston.webp'
  },
  {
    price: "89",
    rating: 4,
    name: 'Brake Caliper',
    description: 'A caliper is part of the disc brake system, the type most cars have in their front brakes. The brake caliper houses your car’s brake pads and pistons. Its job is to slow the car’s wheels by creating friction with the brake rotors. The brake caliper fits like a clamp on a wheel’s rotor to stop the wheel from turning when you step on the brakes. Inside each caliper is a pair of metal plates known as brake pads. When you push the brake pedal, brake fluid creates pressure on pistons in the brake caliper, forcing the pads against the brake rotor and slowing your car. The caliper assembly generally lives inside the wheel and is connected to the master cylinder through tubes, hoses, and valves that conduct brake fluid through the system. We could go on about brake calipers for days on end, but we’ll show some restraint. Here’s what you really need to know: your brake calipers are very important. Over time in normal driving conditions, the heat generated from the braking system can weaken and break down seals inside the calipers.',
    img: 'https://i.ibb.co/zhnvxvW/disk.webp'
  },
]

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }} style={{ paddingTop: "30px", paddingBottom: '100px' }}>
      <Container>
        <Typography sx={{ fontFamily: 'Raleway', fontWeight: "700", pb: 0, float: "left" }} variant="h3" gutterBottom component="div">
          <span style={{ borderBottom: '3px solid red', fontStyle: 'italic' }}>Ne</span>w Arrivals
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: "30px" }}>
          {services.map(service =>
            <Service
              key={service.name}
              service={service}
            ></Service>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;