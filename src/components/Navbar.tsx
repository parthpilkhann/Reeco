import {
  AppShell,
  Group,
  Title,
  Text,
  Button,
  rem,
  Paper,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import { IconShoppingCart } from "@tabler/icons-react";

export default function Navbar() {
  const pinned = useHeadroom({ fixedAt: 120 });
  const theme = useMantineTheme();
  console.log(theme);

  return (
    <>
      <AppShell
        header={{ height: 50, collapsed: !pinned, offset: false }}
        padding="md"
      >
        <AppShell.Header style={{ backgroundColor: theme.colors.green[9] }}>
          <Group justify="space-between" px="xl" h="100%">
            <Group gap="md">
              <Title order={2} style={{ color: "rgba(255, 255, 255, 1)" }}>
                Reeco
              </Title>
              <Button variant="subtle" color="rgba(255, 255, 255, 1)">
                Store
              </Button>
              <Button variant="subtle" color="rgba(255, 255, 255, 1)">
                Order
              </Button>
              <Button variant="subtle" color="rgba(255, 255, 255, 1)">
                Analytics
              </Button>
            </Group>
            <Group gap="md">
              <IconShoppingCart color="white" />
              <Text style={{ color: "rgba(255, 255, 255, 1)" }}>
                Hello, James
              </Text>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Main pt={`calc(${rem(45)} + var(--mantine-spacing-md))`}>
          <Paper shadow="lg">
            <Group px="xl" justify="space-between">
              <Stack>
                <Text>Orders &#62; Order 35467ACV</Text>
                <Text fw={700}>Order 35467ACV</Text>
              </Stack>
              <Group>
                <Button>Back</Button>
                <Button>Approve Order</Button>
              </Group>
            </Group>
          </Paper>
        </AppShell.Main>
      </AppShell>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum
        voluptas quaerat explicabo facilis rem deserunt odio similique ipsum
        architecto magni aut doloribus reiciendis obcaecati ratione eius
        pariatur, quod, neque non alias quisquam eum assumenda velit. Unde
        laborum libero error, voluptatem corrupti sit temporibus perspiciatis
        ipsa vel veritatis nostrum rem magnam eligendi nesciunt beatae quis
        inventore exercitationem adipisci in nihil modi nobis! Corrupti odio
        porro, hic perferendis necessitatibus eveniet dolor quo deserunt
        cupiditate nam dolores error ducimus sed saepe recusandae temporibus,
        libero provident facere, dolorem aliquam dolore. Earum eaque consequatur
        ratione eligendi fugit vitae voluptate magnam quaerat est nostrum,
        doloremque minus rerum. Est nostrum qui doloremque temporibus sunt
        tempora quo tempore in suscipit rem, cum rerum consectetur consequatur.
        Quo omnis sequi iste impedit saepe quod ut reprehenderit. Neque nesciunt
        consequatur soluta voluptates inventore. Animi asperiores eum amet
        veniam officiis unde nulla voluptatum, inventore quasi repellat ipsam
        laborum ea atque, sint nam libero pariatur sequi vel fuga distinctio
        aliquid! Explicabo asperiores porro provident accusamus doloribus veniam
        laudantium facilis dolorum dolorem, incidunt corrupti voluptas nihil
        dolores. Debitis optio libero aspernatur ipsa ullam corporis hic,
        asperiores amet! Laudantium voluptates recusandae esse dolorem!
        Distinctio nesciunt, accusantium voluptate porro mollitia asperiores
        dicta ea fugit nam, sit soluta vitae minus id. Odio laudantium veniam
        totam minima asperiores dolorum blanditiis quis et non, minus molestias
        suscipit aliquam sequi tempore, omnis magni rerum cumque incidunt
        obcaecati recusandae reiciendis! Molestias odio consectetur deserunt
        veniam blanditiis ullam, omnis corporis ex magnam, modi dignissimos,
        facere totam! Doloribus similique corrupti nostrum ab dicta sunt
        laboriosam ipsum, suscipit deleniti? Nemo aliquid consectetur ad fuga!
        Quos odit illum tempora tenetur voluptates alias harum soluta veritatis
        vero, quis est? Laboriosam, quia quae ducimus mollitia aut placeat
        expedita aliquid nostrum odit corrupti! Velit sapiente odit non ipsa
        beatae saepe nemo tempora. Quaerat vitae minima veritatis amet
        temporibus quidem magni ratione voluptates mollitia cupiditate quo eos
        sequi maiores voluptas praesentium consequatur est distinctio ipsum
        autem facere, dolore sed qui dolorum? Nulla inventore provident quo
        suscipit, molestias adipisci eligendi odit? Facere corporis veniam
        voluptate temporibus ut voluptas itaque a! Similique laboriosam enim
        reiciendis rem doloremque nam, accusamus optio consequatur harum
        veritatis quibusdam, neque laudantium, sapiente amet deserunt
        perspiciatis dolor exercitationem temporibus. Sequi deserunt eius animi
        quasi distinctio nesciunt molestiae ex porro, eligendi illo cumque autem
        facilis excepturi doloremque vel dicta aliquam placeat provident esse
        rerum, repellendus minima! Eos delectus neque ullam itaque consequatur
        officiis mollitia aliquid in perspiciatis deleniti rerum odio, officia
        dicta iusto eum sequi doloremque? Nihil est dolores nam adipisci amet
        vitae excepturi esse temporibus aliquid eveniet harum, explicabo saepe
        perferendis nobis accusamus? Eius sequi a incidunt fugiat quaerat, ipsam
        deserunt vel nihil suscipit dignissimos illo, ex officia natus sit
        numquam voluptate quia dolorum facilis eaque est modi doloribus tenetur?
        Culpa voluptas expedita eligendi, eveniet, deleniti nesciunt doloribus
        facilis odit perferendis, nihil assumenda natus neque? Amet velit
        laboriosam veniam saepe provident debitis nesciunt ad porro aut nobis
        quia dignissimos ipsam, esse labore facilis aspernatur libero illum
        cumque vitae tempore obcaecati repudiandae adipisci reiciendis.
        Voluptates tempora eaque incidunt sint ipsum adipisci, totam mollitia
        quasi dolorem animi eveniet quidem error culpa nisi ad nostrum suscipit
        similique harum accusamus id maxime! Error ipsa minus adipisci
        laboriosam eligendi eum reprehenderit, repudiandae saepe recusandae
        blanditiis et, ducimus placeat modi a beatae consequuntur nemo officiis.
        Delectus quisquam excepturi in nostrum sit veritatis quia. Saepe eum
        optio facere, libero asperiores aut omnis similique laudantium a. Est
        saepe perferendis dolores commodi error sed rerum pariatur consectetur
        tempora culpa. Nulla adipisci dolorem doloribus voluptates aperiam saepe
        impedit inventore laboriosam laborum explicabo reprehenderit obcaecati
        molestiae quaerat magni eaque corrupti eum repellendus cumque ipsa
        consequatur delectus, libero dicta ducimus. Tenetur quia sint excepturi
        quidem omnis corrupti tempora eius obcaecati minima enim labore culpa
        fugit quam impedit eligendi quod numquam aperiam animi beatae deleniti
        esse nulla, adipisci odit quaerat. Sit repellendus doloribus quisquam
        error reprehenderit nemo enim at, maxime quaerat ratione ab voluptatem
        iste, ut perferendis facilis libero aliquid natus illum corrupti modi
        totam dolorum labore eos a! Iure pariatur modi ab, dolore ipsam
        necessitatibus quod illum assumenda deleniti molestias officiis
        quibusdam maxime eaque repudiandae soluta ratione voluptatum veritatis
        vitae reprehenderit? Aperiam nemo, sint totam, nesciunt deleniti quae
        saepe blanditiis et ipsa quos eveniet eaque molestias sit veritatis,
        excepturi autem illum iste quidem placeat eius! Architecto, dicta ullam.
        Iusto, temporibus consectetur officiis ad fugit architecto id atque
        reprehenderit? Reprehenderit, doloribus. Voluptate consequatur culpa
        itaque animi odit corporis soluta ab cum eveniet obcaecati. Laudantium,
        architecto cupiditate. Consequatur, laborum neque, quas vel cumque ipsa
        ex accusamus eius ad ipsum exercitationem quam iusto adipisci error
        accusantium facilis quaerat odit suscipit tempore amet libero nobis
        doloremque iste beatae. Dolor voluptates maxime voluptas suscipit,
        cupiditate a expedita provident dolores quibusdam! Placeat,
        exercitationem voluptatem sunt non quae itaque in similique sit
        explicabo atque blanditiis debitis id commodi voluptatibus vitae rem.
        Numquam possimus delectus, amet, facere quam sit quaerat consequatur
        cumque accusamus rem, corrupti eius blanditiis ad voluptatem placeat
        consequuntur? Saepe est consequuntur eligendi veritatis recusandae porro
        eos culpa ab consectetur iure, eveniet praesentium itaque maxime fugiat
        unde. Magnam, mollitia porro recusandae illo commodi itaque dicta nihil
        ab! Ducimus esse numquam quibusdam, aliquid voluptatibus iusto?
        Repellendus quasi repudiandae iure magnam facere iste, aspernatur ab a
        facilis adipisci recusandae, vero dolores incidunt corrupti sequi nulla
        eum neque minus hic! Animi voluptas praesentium accusantium aliquam quam
        ex quae optio nesciunt iste ea error temporibus, inventore perferendis
        dolor, non unde cumque expedita fugit atque dolore quisquam esse eos
        veritatis cupiditate! Veniam harum iure commodi quia incidunt eos
        officiis id recusandae repellat nobis? Fugiat non eum doloremque maiores
        aliquid laborum sequi recusandae odit inventore! Libero enim expedita
        sapiente possimus earum! Provident totam minus illum laudantium, laborum
        vel delectus aspernatur porro ducimus ratione a recusandae animi itaque
        minima enim. Porro fugiat blanditiis magni delectus consectetur
        expedita, distinctio ea laboriosam ullam architecto obcaecati nam
        aspernatur dolorem molestias! Recusandae assumenda quibusdam eum
        suscipit corrupti repellat illo debitis quam, quia sed mollitia
        blanditiis atque voluptas hic. Ullam pariatur id ex. Culpa temporibus
        eos ad. Rem expedita repudiandae tempore iure nam? Aut, ea?
      </Text>
    </>
  );
}
