import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "./App.css";

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

export default function Example() {
  return (
    <div>
      <header className="z-50 lg:sticky top-0 bg-white w-screen p-10 lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="block sm:sticky text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            オフィス保健室
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <a
              href="#feature"
              className="mt-2 flex items-center text-sm text-gray-500"
            >
              <BriefcaseIcon
                aria-hidden="true"
                className="mr-1.5 size-5 shrink-0 text-gray-400"
              />
              オフィス保健室とは
            </a>
            <a
              href="#function"
              className="mt-2 flex items-center text-sm text-gray-500"
            >
              <CalendarIcon
                aria-hidden="true"
                className="mr-1.5 size-5 shrink-0 text-gray-400"
              />
              機能一覧
            </a>
            <a
              href="http://officehokenshitsu.com/script/mailform/inquiry/"
              className="mt-2 flex items-center text-sm text-gray-500"
            >
              <CalendarIcon
                aria-hidden="true"
                className="mr-1.5 size-5 shrink-0 text-gray-400"
              />
              お問い合わせ
            </a>
          </div>
        </div>
      </header>
      <div className="heroImage w-screen bg-gray-50">
        <img src="images/topHeight.jpg" className="w-full" />
      </div>

      {/* feature */}
      <div className="bg-gray-50 py-24 sm:py-32" id="feature">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
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

      {/* 機能 */}
      <div
        className="z-0 isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8"
        id="function"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            人事労務ご担当者様を支える
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900">
            オフィス保健室の機能
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 gap-x-3 lg:max-w-4xl lg:grid-cols-3">
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

      {/* 問い合わせ */}
      <div className="bg-gray-50 py-20">
        <p className="mx-5 text-center text-2xl text-gray-900">
          オフィス保健室に関してご不明・ご不安な点がありましたらお気軽にお問い合わせください
        </p>
        <div className="text-center mt-20">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                window.open(
                  "http://officehokenshitsu.com/script/mailform/inquiry/",
                  "_blank"
                );
              }}
            >
              <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
              お問い合わせ
            </button>
          </span>
        </div>
      </div>

      {/* フッター */}
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
          </ul>
        </div>
      </footer>
    </div>
  );
}
