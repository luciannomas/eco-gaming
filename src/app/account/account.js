'use client'
import { useState } from "react";
import styles from "./account.module.scss";
import { BasicLayout } from "@/layouts/BasicLayout/BasicLayout";
import { Tab } from "semantic-ui-react"; import {
  Info, Settings, Address
} from "@/components/Account/page";
import { Separator } from "@/components/Shared/page";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";


export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [reload, setReload] = useState(false);

  if (!user) {
    router.push("/");
    return null;
  }

  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>mis pedidos</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => ( 
        <Tab.Pane attached={false}>
          <p>Lista de deseos</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses reload={reload} onReload={onReload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Ajustes" },
      render: () => (
        <Tab.Pane attached={false} key={99}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm /> 
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];

  return (
    <>
      <BasicLayout isContainer relative>
        <Info />

        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  )
}
