import React from "react";
import "./App.css";

import { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import CheckIcon from "@mui/icons-material/Check";
import { TextField, Button, Snackbar } from "@mui/material";

export default function AppMui() {
  useEffect(() => {
    document.title = "オフィス保健室";
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "images/icons8-リンゴの健康-120.png";
    }
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />
      <Feature />
      <Function />
      <ContactForm />
      <Footer />
    </div>
  );

  function Header() {
    const pages = [
      { label: "オフィス保健室とは", link: "#feature" },
      { label: "機能一覧", link: "#function" },
      { label: "お問い合わせ", link: "#contact" },
    ];
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
      <header>
        <AppBar color="success">
          <Container>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                component="a"
                href="https://officehokenshitsu.com"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                オフィス保健室
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                      <Typography
                        component="a"
                        href={page.link}
                        sx={{
                          textAlign: "center",
                          color: "black",
                          textDecoration: "none",
                          ":hover": { color: "blue" },
                        }}
                      >
                        {page.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant="h5"
                component="a"
                href="https://officehokenshitsu.com"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                オフィス保健室
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    component="a"
                    href={page.link}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      ":hover": { color: "yellow" },
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <div className="heroImage mt-20 pb-32 md:pb-60">
          <img src="images/topHeight.jpg" className="w-full" alt="Hero" />
        </div>
      </header>
    );
  }

  function Feature() {
    return (
      <section className="pb-32 md:pb-60" id="feature">
        <Container>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ marginBottom: 10 }}
          >
            オフィス保健室でできること
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
            <Box maxWidth={500}>
              <Typography
                variant="h5"
                color="textSecondary"
                sx={{ marginBottom: 4 }}
              >
                健康データの一元管理で大幅な工数削減
              </Typography>
              <img
                alt="Health data management"
                src="images/graph.jpg"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
            <Box maxWidth={500}>
              <Typography
                variant="h5"
                color="textSecondary"
                sx={{ marginBottom: 4 }}
              >
                多彩な分析を、誰でも簡単に
              </Typography>
              <img
                alt="Analysis made easy"
                src="images/healthconsult.jpg"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Box>
        </Container>
      </section>
    );
  }

  function Function() {
    const tiers = [
      {
        id: "健康診断業務",
        features: [
          "健康診断受診の手配",
          "健康診断結果のデータ管理",
          "該当者へ受診勧奨の連絡",
          "紙の健診結果のデータ化代行",
        ],
      },
      {
        id: "ストレスチェック業務",
        features: [
          "PC/スマートフォンによるWEB受検",
          "受検結果の自動判定",
          "受診勧奨メールの一斉送信",
          "産業医面談の管理",
          "就業判定の管理",
          "集団分析",
        ],
      },
      {
        id: "その他",
        features: ["こころとからだの相談窓口", "多言語対応"],
      },
    ];
    return (
      <section className="pb-32 md:pb-60" id="function">
        <Container>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ marginBottom: 10 }}
          >
            オフィス保健室の機能
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
            {tiers.map((tier) => (
              <Box
                key={tier.id}
                border={1}
                borderColor="grey.300"
                borderRadius={2}
                p={3}
                bgcolor="white"
                sx={{
                  maxWidth: 300,
                  width: "100%",
                  "@media (max-width:600px)": { width: "90%" }, // スマホで幅を統一
                }}
              >
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {tier.id}
                </Typography>
                <ul>
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CheckIcon
                        color="success"
                        style={{ marginRight: "8px" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    );
  }

  function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
      <div className="pb-64">
        <div className="py-20">
          <p className="mx-5 text-center text-2xl text-gray-900">
            オフィス保健室に関してご不明・ご不安な点がありましたらお気軽にお問い合わせください
          </p>
        </div>

        <div
          className="mx-auto p-12 rounded-md sm:w-2/3 xs:w-full"
          id="contact"
        >
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input
              type="hidden"
              name="accessKey"
              value="1c5cf9be-b8d2-4501-a80d-05eaefb80be0"
            />
            <input
              type="hidden"
              name="subject"
              value="ホームページよりお問い合わせ"
            />
            <TextField type="text" name="honeypot" sx={{ display: "none" }} />
            <TextField
              label="お名前"
              name="name"
              id="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="メールアドレス"
              name="email"
              id="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="メッセージ"
              name="message"
              id="message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <input
              type="hidden"
              name="redirectTo"
              value="https://officehokenshitsu.com"
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              className="mt-7"
            >
              送信
            </Button>
          </form>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <div>
        <footer className="py-20 flex gap-5 justify-center bg-gray-500 text-white">
          <div className="footerLogo text-2xl">オフィス保健室</div>
          <div className="footerNav">
            <ul className="pl-5 border-l-2">
              <li>
                <a href="#feature">オフィス保健室とは</a>
              </li>
              <li>
                <a href="#function">機能一覧</a>
              </li>
              <li>
                <a href="#contact">お問い合わせ</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
