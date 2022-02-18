// import Head from "next/head";
// import {Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
// import NextLink from "next/link";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import {Navigate} from "react-router-dom";
// import React from "react";
//
// <div>
//     <Head>
//         <title>Login | Material Kit</title>
//     </Head>
//     <Box
//         component="main"
//         sx={{
//             alignItems: 'center',
//             display: 'flex',
//             flexGrow: 1,
//             minHeight: '100%'
//         }}
//     >
//         <Container maxWidth="sm">
//             <NextLink
//                 href="/"
//                 passHref
//             >
//                 <Button
//                     component="a"
//                     startIcon={<ArrowBackIcon fontSize="small" />}
//                 >
//                     Dashboard
//                 </Button>
//             </NextLink>
//             <form onSubmit={this.onHandleLogin}>
//                 {!isSuccess ? <div>{message}</div> : <Navigate to='dashboard' />}
//                 <Box sx={{ my: 3 }}>
//                     <Typography
//                         color="textPrimary"
//                         variant="h4"
//                     >
//                         Sign in
//                     </Typography>
//                     <Typography
//                         color="textSecondary"
//                         gutterBottom
//                         variant="body2"
//                     >
//                         Sign in on the internal platform
//                     </Typography>
//                 </Box>
//                 <Grid
//                     container
//                     spacing={3}
//                 >
//                     <Grid
//                         item
//                         xs={12}
//                         md={6}
//                     >
//                     </Grid>
//                     <Grid
//                         item
//                         xs={12}
//                         md={6}
//                     >
//                     </Grid>
//                 </Grid>
//                 <Box
//                     sx={{
//                         pb: 1,
//                         pt: 3
//                     }}
//                 >
//                     <Typography
//                         align="center"
//                         color="textSecondary"
//                         variant="body1"
//                     >
//                         or login with email address
//                     </Typography>
//                 </Box>
//                 <TextField
//
//                     fullWidth
//                     helperText={"Enter email address"}
//                     label="Email Address"
//                     margin="normal"
//                     name="email"
//                     type="email"
//                     variant="outlined"
//                 />
//                 <TextField
//
//                     fullWidth
//                     helperText={"Password"}
//                     label="Password"
//                     margin="normal"
//                     name="password"
//                     type="password"
//                     variant="outlined"
//                 />
//                 <Box sx={{ py: 2 }}>
//                     <Button
//                         color="primary"
//
//                         fullWidth
//                         size="large"
//                         type="submit"
//                         variant="contained"
//                     >
//                         Sign In Now
//                     </Button>
//                 </Box>
//                 <Typography
//                     color="textSecondary"
//                     variant="body2"
//                 >
//                     Don&apos;t have an account?
//                     {' '}
//                     <NextLink
//                         href="/register"
//                     >
//                         <Link
//                             to="/register"
//                             variant="subtitle2"
//                             underline="hover"
//                             sx={{
//                                 cursor: 'pointer'
//                             }}
//                         >
//                             Sign Up
//                         </Link>
//                     </NextLink>
//                 </Typography>
//             </form>
//         </Container>
//     </Box>
// </div>