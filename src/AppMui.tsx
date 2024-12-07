import React from "react";
import "./App.css";

import { useEffect } from "react";
import { useState } from "react";

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
import { TextField, Button } from "@mui/material";

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
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
      null
    );
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
      <header>
        {/* お問い合わせ送信後のメッセージ */}
        {/* <Snackbar
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          message={snackbarMessage}
          autoHideDuration={3000}
        /> */}

        <AppBar color="success">
          <Container>
            <Toolbar disableGutters>
              {/* スマホ用ロゴ */}
              <Typography
                variant="h6"
                component="a"
                href="https://officehokenshitsu.com"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                オフィス保健室
              </Typography>

              {/* ハンバーガー */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
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
                          ":hover": { color: "black" },
                          ":clicked": { color: "black" },
                          color: "black",
                          my: 2,
                          display: "block",
                        }}
                      >
                        {page.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* パソコン用ロゴ */}
              <Typography
                variant="h5"
                component="a"
                href="https://officehokenshitsu.com"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
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
                      ":hover": { color: "white" },
                      ":clicked": { color: "white" },
                      color: "white",
                      my: 2,
                      display: "block",
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <div className="heroImage w-screen mt-24 pb-32 md:pb-60">
          <img src="images/topHeight.jpg" className="w-full" />
        </div>
      </header>
    );
  }

  function Feature() {
    return (
      <div className="pb-32 md:pb-60" id="feature">
        <div className="mx-auto px-6 max-w-2xl lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            オフィス保健室でできること
          </p>

          <div className="mx-auto overflow-hidden grid py-12 py-sm-8 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
                  健康データの一元管理で大幅な工数削減
                </p>
              </div>
            </div>
            <div className="w-full">
              <img
                alt="Product screenshot"
                src="images/graph.jpg"
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>

          <div className="mx-auto overflow-hidden pt-sm-8 pt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="sm:order-last lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
                  多彩な分析を、誰でも簡単に
                </p>
              </div>
            </div>
            <div className="w-full">
              <img
                alt="Product screenshot"
                src="images/healthconsult.jpg"
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
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
        featured: false,
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
        featured: false,
      },
      {
        id: "その他",
        features: ["こころとからだの相談窓口", "多言語対応"],
        featured: false,
      },
    ];
    return (
      <div className="z-0 isolate px-6 pb-32 md:pb-60 lg:px-8" id="function">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            人事労務ご担当者様を支える
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900">
            オフィス保健室の機能
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 gap-x-7 lg:max-w-5xl lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white/60 sm:mx-8 lg:mx-0 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-7 pb-10"
            >
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-gray-900 text-3xl font-semibold tracking-tight">
                  {tier.id}
                </span>
              </p>
              <ul
                role="list"
                className="text-gray-600 mt-8 space-y-3 text-sm/6 sm:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-indigo-600 h-6 w-5 flex-none"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
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
          className="mx-auto p-12 rounded-md shadow-md sm:w-2/3 xs:w-full"
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
              value="ホームページよりお問い合わせ_test"
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
